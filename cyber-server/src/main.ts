import 'dotenv/config';
import { WebSocket } from 'ws';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { WsAdapter } from '@nestjs/platform-ws';
import { AppModule } from './app.module';

// Supabase Realtime + Nest WsAdapter need a WebSocket impl in Node (Docker slim has none).
(globalThis as typeof globalThis & { WebSocket: typeof WebSocket }).WebSocket =
  WebSocket;

function parseCorsOrigins(): string | string[] {
  const raw = process.env.CORS_ORIGIN;
  if (!raw) {
    return ['http://localhost:3000', 'http://localhost:3001'];
  }
  const origins = raw
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
  return origins.length === 1 ? origins[0] : origins;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useWebSocketAdapter(new WsAdapter(app));
  app.enableCors({
    origin: parseCorsOrigins(),
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const port = process.env.PORT ?? 5001;
  await app.listen(port, '0.0.0.0');
  console.log(`CyberControl server running on http://0.0.0.0:${port}`);
}

bootstrap();
