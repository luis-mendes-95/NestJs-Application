import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    create(createUserDto: CreateUserDto): import("./entities/user.entity").User | Promise<import("./entities/user.entity").User>;
    findAll(): import("./entities/user.entity").User[] | Promise<import("./entities/user.entity").User[]>;
    findOne(id: string): import("./entities/user.entity").User | Promise<import("./entities/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): import("./entities/user.entity").User | Promise<import("./entities/user.entity").User>;
    remove(id: string): void | Promise<void>;
}
