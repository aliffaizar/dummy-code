import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { createServer } from 'http';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(cookieParser(process.env.COOKIE_SECRET));
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  await app.init();
  const server = createServer((req, res) =>
    app.getHttpServer().emit('request', req, res),
  );
  if (process.env.NODE_ENV === 'development') {
    server.listen(3000, () => {
      console.log(`Server is listening on port ${3000}`);
    });
  } else {
    server.listen();
  }
}
bootstrap();
