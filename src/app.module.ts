import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { EventGateway } from './event/event.gateway';
import { EventModule } from './event/event.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env'
    }),
    EventModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
