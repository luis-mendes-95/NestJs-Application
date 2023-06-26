import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): import("./entities/user.entity").User | Promise<import("./entities/user.entity").User>;
    findAll(): import("./entities/user.entity").User[] | Promise<import("./entities/user.entity").User[]>;
    findOne(id: string): import("./entities/user.entity").User | Promise<import("./entities/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): import("./entities/user.entity").User | Promise<import("./entities/user.entity").User>;
    remove(id: string): void | Promise<void>;
}
