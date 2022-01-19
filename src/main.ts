import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    // URI VERSIONING CONFIG (http://localhost:3000/v2/hello)
    type: VersioningType.URI,

    // HEADER-TYPE VERSIONING CONFIG (TO USE WITH POSTMAN ADD HEADER 'Version-Header' AND GIVE IT A VALUE)
    // type: VersioningType.HEADER,
    // header: 'Version-Header',

    // MEDIA-TYPE VERSIONING CONFIG (TO USE WITH POSTMAN CHANGE VALUE OF HEADER 'Accept' AND GIVE IT VALUE application/json;v=1)
    // type: VersioningType.MEDIA_TYPE,
    // key: 'v=',
  });

  const config = new DocumentBuilder()
    .setTitle('Versioning example')
    .setDescription('API description')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(3000);
}
bootstrap();
