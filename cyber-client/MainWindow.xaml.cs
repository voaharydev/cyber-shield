using System.IO;
using System.Net.WebSockets;
using System.Text;
using System.Text.Json;
using System.Windows;
using System.Windows.Input;

namespace CyberClient;

public partial class MainWindow : Window
{
    private readonly string _serverHost;
    private readonly int _serverPort;
    private readonly string _cyberId;
    private readonly int _numeroPoste;
    private ClientWebSocket? _webSocket;
    private CancellationTokenSource? _cts;
    private bool _isUnlocked;
    private bool _isPostpaidSession;

    public MainWindow()
    {
        InitializeComponent();

        var config = LoadConfig();
        _serverHost = config.ServerHost;
        _serverPort = config.ServerPort;
        _cyberId = config.CyberId;
        _numeroPoste = config.NumeroPoste;

        Visibility = Visibility.Visible;
        _isUnlocked = false;
        _isPostpaidSession = false;

        Loaded += async (_, _) =>
        {
            try
            {
                await ConnectWebSocketAsync();
            }
            catch (Exception ex)
            {
                UpdateConnectionStatus($"Erreur: {ex.Message}");
            }
        };

        Closing += (_, _) =>
        {
            _cts?.Cancel();
            _webSocket?.Dispose();
        };
    }

    private static AppConfig LoadConfig()
    {
        try
        {
            var path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "appsettings.json");
            if (File.Exists(path))
            {
                var json = File.ReadAllText(path);
                var config = JsonSerializer.Deserialize<AppConfig>(json);
                if (config != null)
                {
                    return config;
                }
            }
        }
        catch
        {
            // fallback to defaults
        }

        return new AppConfig();
    }

    private async Task ConnectWebSocketAsync()
    {
        _cts?.Cancel();
        _cts = new CancellationTokenSource();

        while (!_cts.Token.IsCancellationRequested)
        {
            try
            {
                _webSocket?.Dispose();
                _webSocket = new ClientWebSocket();

                var uri = new Uri(
                    $"ws://{_serverHost}:{_serverPort}/cyber?cyber={Uri.EscapeDataString(_cyberId)}&poste={_numeroPoste}");

                UpdateConnectionStatus($"Connexion à {uri.Host}:{_serverPort}...");

                await _webSocket.ConnectAsync(uri, _cts.Token);

                Dispatcher.Invoke(() =>
                {
                    UpdateConnectionStatus($"Connecté — Poste {_numeroPoste}");
                });

                await ReceiveLoopAsync(_cts.Token);
            }
            catch (OperationCanceledException)
            {
                break;
            }
            catch (Exception ex)
            {
                Dispatcher.Invoke(() =>
                {
                    UpdateConnectionStatus($"Déconnecté: {ex.Message}. Reconnexion...");
                });
            }

            if (_cts.Token.IsCancellationRequested)
            {
                break;
            }

            try
            {
                await Task.Delay(5000, _cts.Token);
            }
            catch (OperationCanceledException)
            {
                break;
            }
        }
    }

    private async Task ReceiveLoopAsync(CancellationToken cancellationToken)
    {
        var buffer = new byte[4096];

        while (_webSocket?.State == WebSocketState.Open && !cancellationToken.IsCancellationRequested)
        {
            var result = await _webSocket.ReceiveAsync(
                new ArraySegment<byte>(buffer),
                cancellationToken);

            if (result.MessageType == WebSocketMessageType.Close)
            {
                await _webSocket.CloseAsync(
                    WebSocketCloseStatus.NormalClosure,
                    string.Empty,
                    cancellationToken);
                break;
            }

            var message = Encoding.UTF8.GetString(buffer, 0, result.Count);
            HandleServerMessage(message);
        }
    }

    private void HandleServerMessage(string raw)
    {
        try
        {
            using var doc = JsonDocument.Parse(raw);
            var root = doc.RootElement;

            if (!root.TryGetProperty("event", out var eventProp))
            {
                return;
            }

            var eventName = eventProp.GetString();

            Dispatcher.Invoke(() =>
            {
                switch (eventName)
                {
                    case "command_lock":
                    case "session_stopped":
                        ShowLockScreen();
                        break;
                    case "unlock_success":
                        var isPostpaid = root.TryGetProperty("typeSession", out var ts)
                            && ts.GetString() == "POSTPAID";
                        if (isPostpaid)
                        {
                            EnterPostpaidMode();
                        }
                        else
                        {
                            HideLockScreen();
                        }
                        break;
                    case "unlock_rejected":
                        var msg = root.TryGetProperty("message", out var m)
                            ? m.GetString()
                            : "Code refusé";
                        StatusText.Text = msg ?? "Code refusé";
                        break;
                    case "time_update":
                        if (root.TryGetProperty("typeSession", out var typeSession)
                            && typeSession.GetString() == "POSTPAID")
                        {
                            if (root.TryGetProperty("tempsEcoule", out var elapsed))
                            {
                                var amount = root.TryGetProperty("montantEstime", out var amt)
                                    ? amt.GetInt32()
                                    : 0;
                                UpdatePostpaidDisplay(elapsed.GetInt32(), amount);
                            }
                        }
                        else if (root.TryGetProperty("tempsRestant", out var temps))
                        {
                            TimeText.Text = $"{temps.GetInt32()} min restantes";
                        }
                        break;
                    case "pong":
                        break;
                }
            });
        }
        catch (JsonException)
        {
            // ignore malformed JSON
        }
    }

    private void ShowLockScreen()
    {
        _isUnlocked = false;
        _isPostpaidSession = false;
        Visibility = Visibility.Visible;
        WindowState = WindowState.Maximized;
        LockPanel.Visibility = Visibility.Visible;
        PostpaidBarPanel.Visibility = Visibility.Collapsed;
        CodeInput.Text = string.Empty;
        StatusText.Text = string.Empty;
        TimeText.Text = string.Empty;
    }

    private void HideLockScreen()
    {
        _isUnlocked = true;
        _isPostpaidSession = false;
        Visibility = Visibility.Collapsed;
        StatusText.Text = string.Empty;
    }

    private void EnterPostpaidMode()
    {
        _isUnlocked = true;
        _isPostpaidSession = true;
        Visibility = Visibility.Visible;
        WindowState = WindowState.Maximized;
        Background = System.Windows.Media.Brushes.Transparent;
        LockPanel.Visibility = Visibility.Collapsed;
        PostpaidBarPanel.Visibility = Visibility.Visible;
        UpdatePostpaidDisplay(0, 0);
    }

    private void UpdatePostpaidDisplay(int minutes, int amountAr)
    {
        PostpaidTimeText.Text = $"Session libre — {minutes} min";
        PostpaidAmountText.Text = $"{amountAr:N0} Ar (estimé)";
    }

    private void UpdateConnectionStatus(string text)
    {
        ConnectionText.Text = text;
    }

    private async Task SendEventAsync(string eventName, object? extra = null)
    {
        if (_webSocket?.State != WebSocketState.Open)
        {
            StatusText.Text = "Non connecté au serveur";
            return;
        }

        try
        {
            string payload;
            if (extra != null)
            {
                var dict = new Dictionary<string, object> { ["event"] = eventName };
                foreach (var prop in extra.GetType().GetProperties())
                {
                    dict[prop.Name] = prop.GetValue(extra) ?? "";
                }
                payload = JsonSerializer.Serialize(dict);
            }
            else
            {
                payload = JsonSerializer.Serialize(new { @event = eventName });
            }

            var bytes = Encoding.UTF8.GetBytes(payload);
            await _webSocket.SendAsync(
                new ArraySegment<byte>(bytes),
                WebSocketMessageType.Text,
                true,
                CancellationToken.None);
        }
        catch (Exception ex)
        {
            StatusText.Text = $"Erreur envoi: {ex.Message}";
        }
    }

    public async Task TryUnlockAsync(string code)
    {
        await SendEventAsync("try_unlock", new { code = code.Trim().ToUpperInvariant() });
    }

    private async void UnlockButton_Click(object sender, RoutedEventArgs e)
    {
        var code = CodeInput.Text.Trim();
        if (string.IsNullOrEmpty(code))
        {
            StatusText.Text = "Entrez un code ticket";
            return;
        }

        StatusText.Text = "Vérification...";
        await TryUnlockAsync(code);
    }

    private async void CodeInput_KeyDown(object sender, KeyEventArgs e)
    {
        if (e.Key == Key.Enter)
        {
            await TryUnlockAsync(CodeInput.Text);
        }
    }

    private async void PostpaidStartButton_Click(object sender, RoutedEventArgs e)
    {
        StatusText.Text = "Démarrage session libre...";
        await SendEventAsync("try_postpaid_start");
    }

    private async void PostpaidStopButton_Click(object sender, RoutedEventArgs e)
    {
        await SendEventAsync("stop_postpaid");
    }
}

public class AppConfig
{
    public string ServerHost { get; set; } = "localhost";
    public int ServerPort { get; set; } = 5001;
    public string CyberId { get; set; } = "cyber_legacy_default";
    public int NumeroPoste { get; set; } = 1;
}
