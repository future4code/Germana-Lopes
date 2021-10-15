import Product from "./Product"


export default class Ticket extends Product {
    constructor(
        id: string,
        name: string,
        description: string,
        price: number,
        public origin: string,
        public destiny: string,
    ) {
        super(id, name, description, price)
        this.origin = origin
        this.destiny = destiny
    }
}