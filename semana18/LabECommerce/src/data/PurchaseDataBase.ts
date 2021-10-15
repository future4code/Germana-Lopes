import BaseDataBase from "./BaseDataBase";
import Purchase from "../entities/Purchase";
import TableDataBase from "./TableDataBase";

export default class PurchaseDataBase extends BaseDataBase {

    // public insertPurchase = async (purchase: Purchase): Promise<any> => {
    //     const result = await BaseDataBase.connection(purchaseTableName)
    //         .insert({
    //             id: purchase.getId(),
    //             user_id: purchase.getUserId(),
    //             product_id: purchase.getProductId(),
    //             quantity: purchase.quantity,
    //             total_value: purchase.totalValue
    //         });
    //     return result;
    // };
};