import BaseDataBase from "./BaseDataBase";
import Purchase from "../entities/Purchase";
import TableDataBase from "./TableDataBase";
import { purchaseTableName } from "./TableDataBase";

export default class PurchaseDataBase extends BaseDataBase {

    public insertPurchase = async (purchase: Purchase): Promise<any> => {
        const result = await BaseDataBase.connection(purchaseTableName)
            .insert({
                id: purchase.getId(),
                user_id: purchase.getUserId(),
                product_id: purchase.getProductId(),
                quantity: purchase.quantity,
                total_value: purchase.totalValue
            });
        return result;
    };

    public getAllPurchases = async (): Promise<any> =>{
        const result = await BaseDataBase.connection(purchaseTableName);
        return result;
    };

    public selectPurchaseByUserId = async (userId: string): Promise<any> =>{
        const result = await BaseDataBase.connection.raw(`
                SELECT * FROM ${purchaseTableName}
                WHERE user_id = "${userId}"
                ORDER BY user_id ASC
                ;
            `);
            return result[0]
    };
};