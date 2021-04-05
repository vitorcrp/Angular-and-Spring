import { Cliente } from "./cliente";
import { Item } from "./item";

export class Venda {
    constructor (
        public id?:number,
        public cliente?:Cliente,
        public itens?:Array <Item>,
        public frete?:number,
        public total?:number
    ) {}
}