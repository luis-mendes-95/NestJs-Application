import { CreateUserDto } from 'modules/users/dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { UsersRepository } from '../users.repository';
import { UpdateUserDto } from 'modules/users/dto/update-user.dto';
export declare class UsersInMemoryRepository implements UsersRepository {
    create(data: CreateUserDto): User | Promise<User>;
    findAll(): User[] | Promise<User[]>;
    findOne(id: string): User | Promise<User>;
    update(id: string, data: UpdateUserDto): User | Promise<User>;
    delete(id: string): void | Promise<void>;
}
