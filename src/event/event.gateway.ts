import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})


export class EventGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  findAll(@MessageBody() data){
    return data
  }

  @SubscribeMessage('events')
  onEvent<T>(@MessageBody() data: T) {
    const event = 'events';
    // const response = [1, 2, 3];

    return { event, data }

  }

  @SubscribeMessage('connected')
  async connect(@MessageBody() data){
    return data;
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }
}