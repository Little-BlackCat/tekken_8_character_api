import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerOptions } from 'swagger-options';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('api-docs', app, document)

  await app.listen(3333); 
}
bootstrap();
