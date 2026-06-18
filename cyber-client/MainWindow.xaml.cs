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
                        ShowLockScreen();
                        break;
                    case "unlock_success":
                        HideLockScreen();
                        break;
                    case "unlock_rejected":
                        var msg = root.TryGetProperty("message", out var m)
                            ? m.GetString()
                            : "Code refusé";
                        StatusText.Text = msg ?? "Code refusé";
                        break;
                    case "time_update":
                        if (root.TryGetProperty("tempsRestant", out var temps))
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
        Visibility = Visibility.Visible;
        CodeInput.Text = string.Empty;
        StatusText.Text = string.Empty;
        TimeText.Text = string.Empty;
    }

    private void HideLockScreen()
    {
        _isUnlocked = true;
        Visibility = Visibility.Collapsed;
        StatusText.Text = string.Empty;
    }

    private void UpdateConnectionStatus(string text)
    {
        ConnectionText.Text = text;
    }

    public async Task TryUnlockAsync(string code)
    {
        if (_webSocket?.State != WebSocketState.Open)
        {
            StatusText.Text = "Non connecté au serveur";
            return;
        }

        try
        {
            var payload = JsonSerializer.Serialize(new
            {
                @event = "try_unlock",
                code = code.Trim().ToUpperInvariant(),
            });

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
}

public class AppConfig
{
    public string ServerHost { get; set; } = "localhost";
    public int ServerPort { get; set; } = 5001;
    public string CyberId { get; set; } = "cyber_legacy_default";
    public int NumeroPoste { get; set; } = 1;
}
