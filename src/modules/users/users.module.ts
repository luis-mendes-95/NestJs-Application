/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service'; 
import { UsersRepository } from './repositories/users.repository'; 
import { PrismaService } from 'src/database/prisma.service';
import { UsersPrismaRepository } from './repositories/prisma/users.prisma.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    { provide: UsersRepository, useClass: UsersPrismaRepository }
  ],
})

export class UsersModule {}
