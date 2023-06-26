"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersInMemoryRepository = void 0;
const user_entity_1 = require("../../entities/user.entity");
const db_1 = require("../../../../src/database/db");
class UsersInMemoryRepository {
    create(data) {
        const newUser = new user_entity_1.User();
        Object.assign(newUser, Object.assign({}, data));
        db_1.users.push(newUser);
        return newUser;
    }
    findAll() {
        return db_1.users;
    }
    findOne(id) {
        const user = db_1.users.find((user) => user.id === id);
        return user;
    }
    update(id, data) {
        const userIndex = db_1.users.findIndex((user) => user.id === id);
        db_1.users[userIndex] = Object.assign(Object.assign({}, db_1.users[userIndex]), data);
        return db_1.users[userIndex];
    }
    delete(id) {
        const userIndex = db_1.users.findIndex((user) => user.id === id);
        db_1.users.splice(userIndex, 1);
    }
}
exports.UsersInMemoryRepository = UsersInMemoryRepository;
//# sourceMappingURL=users.in-memory.repository.js.map