/* eslint-disable prettier/prettier */

import { randomUUID } from 'node:crypto';

export class ServiceOrder {
    readonly id: string;
    Date: string;
    client: string;
    product: string;
    printType: string;
    description: string;
    files: string;
    mockupImg: string;
    status: string;
    cost: string;
    price: string;
    margin: string;

    constructor() {
        this.id = randomUUID()
    }
}
