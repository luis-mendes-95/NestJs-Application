import { Module } from '@nestjs/common';
import { ServiceOrdersService } from './service-orders.service';
import { ServiceOrdersController } from './service-orders.controller';
import { ServiceOrdersRepository } from './repositories/service-orders.repository';
import { ServiceOrdersInMemoryRepository } from './repositories/in-memory/service-orders.in-memory.repositoy';
import { PrismaService } from 'src/database/prisma.service';
import { ServiceOrdersPrismaRepository } from './repositories/prisma/service-order-prisma.repository';

@Module({
  controllers: [ServiceOrdersController],
  providers: [
    ServiceOrdersService,
    PrismaService,
    {
      provide: ServiceOrdersRepository,
      useClass: ServiceOrdersPrismaRepository,
    },
  ],
  exports: [ServiceOrdersService],
})
export class ServiceOrdersModule {}
