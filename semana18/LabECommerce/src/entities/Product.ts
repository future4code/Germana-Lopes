export default class Product {
    constructor(
        private id: string,
        public name: string,
        public description: string,
        public price: number,
        public origin?: string,
        public destination?: string
    ) { }

    public getId(): string {
        return this.id
    }

    public getName() {
        return this.name;
    }

    public getDescription() {
        return this.description;
    }

    public getPrice() {
        return this.price;
    }
}