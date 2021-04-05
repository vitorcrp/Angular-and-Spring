import { Produto } from "./produto";
import { Venda } from "./venda";

export class Item {
    constructor (
        public id?:number,
        public venda?: Venda,
        public produto?: Produto,
        public quantidade?:number,
        public total?:number,
    ) {}
}