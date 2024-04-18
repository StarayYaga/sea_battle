import { SubscribeMessage, WebSocketGateway, OnGatewayInit, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, ConnectedSocket, MessageBody } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: 'chat' 
})


export class EventGateway {
	@SubscribeMessage('newMessage')
  handleMessage(@ConnectedSocket() client: Socket, @MessageBody() message: string): void {
   // Business logic to save the message to the database
   // Broadcasting the new message to all connected clients, excluding the sender
   client.broadcast.emit('newMessage', message);
 
   // Let's add a bit of humor - respond to the sender with an acknowledgement
   client.emit('acknowledgement', 'Your message was received loud and clear!');
 }
}