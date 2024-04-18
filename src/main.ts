import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.app_port

  const app = await NestFactory.create(AppModule, {cors: true})
  app.enableCors();
    
  await app.listen(port, ()=>{
    console.log(`Server start on ${port} port`)
  })
}
bootstrap();
