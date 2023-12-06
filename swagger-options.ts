import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerOptions = new DocumentBuilder()
  .setTitle('Tekken 8 Characters API')
  .setDescription('API documentation for Tekken 8 Characters')
  .setVersion('1.0')
  .addTag('characters', 'Operations related to Tekken 8 characters')
  .build();
