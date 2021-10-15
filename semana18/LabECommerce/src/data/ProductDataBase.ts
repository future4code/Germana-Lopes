import Product from "../entities/Product";
import BaseDataBase from "./BaseDataBase";
import { productsTableName } from "./TableDataBase";

export default class ProductDataBase extends BaseDataBase {

    public insertProduct = async (product: Product): Promise<any> => {
        const result = await BaseDataBase.connection(productsTableName)
            .insert({
                id: product.getId(),
                name: product.name,
                description: product.description,
                price: product.price,
                origin: product.origin,
                destination: product.destination
            });
        return result;
    };

    public getAllProducts = async (order:string): Promise<any> =>{
        const result = await BaseDataBase.connection.raw(`
            SELECT * FROM ${productsTableName}
            ORDER BY price ${order}
            ;
        `);
        return result[0]
    };
}