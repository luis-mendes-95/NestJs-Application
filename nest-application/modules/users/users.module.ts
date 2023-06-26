/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersController } from 'modules/users/users.controller';
import { UsersService } from 'modules/users/users.service';
import { UsersRepository } from 'modules/users/repositories/users.repository';
import { UsersInMemoryRepository } from 'modules/users/repositories/in-memory/users.in-memory.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    { provide: UsersRepository, useClass: UsersInMemoryRepository }
  ],
})

export class UsersModule {}
