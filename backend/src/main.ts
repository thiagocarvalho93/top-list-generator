import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaExceptionFilter } from './exception-filters/prisma.exception-filter';
import { ValidationPipe } from '@nestjs/common';
import { InvalidRelationExceptionFilter } from './exception-filters/invalid-relation.exception-filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(
    new PrismaExceptionFilter(),
    new InvalidRelationExceptionFilter(),
  );

  const config = new DocumentBuilder()
    .setTitle('Top list generator API')
    .setDescription('Built with NestJS')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
