/* eslint-disable prettier/prettier */

import { randomUUID } from 'node:crypto';

export class User {
    readonly id: string;
    name: string;
    email: string;
    password: string;
    phone: string;

    constructor() {
        this.id = randomUUID()
    }
}
