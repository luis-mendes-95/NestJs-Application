/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module'; 
import { ServiceOrdersModule } from './modules/service-orders/service-orders.module';

@Module({
  imports: [UsersModule, ServiceOrdersModule],
})
export class AppModule {}
