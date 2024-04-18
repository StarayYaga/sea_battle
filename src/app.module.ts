import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { EventModule } from './event/event.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    ConfigModule.forRoot({
      envFilePath:'.env'
    }),
    EventModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
