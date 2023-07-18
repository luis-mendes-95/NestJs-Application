/* eslint-disable prettier/prettier */
import { BadRequestException, Module } from '@nestjs/common';
import { ServiceOrdersService } from './service-orders.service';
import { ServiceOrdersController } from './service-orders.controller';
import { ServiceOrdersRepository } from './repositories/service-orders.repository';
import { ServiceOrdersInMemoryRepository } from './repositories/in-memory/service-orders.in-memory.repositoy';
import { PrismaService } from 'src/database/prisma.service';
import { ServiceOrdersPrismaRepository } from './repositories/prisma/service-order-prisma.repository';
import { MulterModule } from '@nestjs/platform-express'
import { diskStorage } from 'multer';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: "./temp",
        filename: (_,file,cb) => {
          cb(null, file.originalname);
        },
      }),
      fileFilter: (_, file, cb) => {

          cb(null, true)

      }
    })
  ],
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
