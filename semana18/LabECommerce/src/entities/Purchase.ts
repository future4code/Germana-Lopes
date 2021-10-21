export default class Purchase {
    constructor(
        private purchaseID: string,
        private userID: string,
        private productID: string,
        public quantity: number,
        public totalValue: number
    ) { }

    public getId(): string {
        return this.purchaseID
    }

    public getUserId(): string {
        return this.userID
    }

    public getProductId(): string {
        return this.productID
    }
}