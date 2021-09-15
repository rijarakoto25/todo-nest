import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 3000;
  const app = await NestFactory.create(AppModule);
  app.enableCors({credentials: true, origin: "http://localhost:4200"});
  await app.listen(PORT, () => console.log(`Server started`));
}
bootstrap();
