import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ServiceOrdersModule } from './modules/service-orders/service-orders.module';

@Module({
  imports: [UsersModule, AuthModule, ServiceOrdersModule],
})
export class AppModule {}
