import { Line } from './line.model';
import { Client } from './client.model';

export class Order {
    constructor
   (
        public lines: Line[],
        public total: number,
        public client: Client,
        public id?: number
    ) {}
}
