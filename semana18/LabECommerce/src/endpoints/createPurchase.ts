import { Request, Response } from "express"
import ProductDataBase from "../data/ProductDataBase";
import Purchase from "../entities/Purchase";
import PurchaseDataBase from "../data/PurchaseDataBase";


export const createPurchase = async (req: Request, res: Response) => {
    try{
        const { userID, productID, quantity } = req.body;

        if (!userID || !productID || !quantity){
            throw new Error("Por favor, preencha todos os campos")
        };

        const purchaseID = Date.now() + Math.random().toString();

        const price = await new ProductDataBase().getProductById(productID);
        
        const totalValue = price.price*quantity;

        const purchase = new Purchase(purchaseID, userID, productID, quantity, totalValue);

        await new PurchaseDataBase().insertPurchase(purchase);

        res.status(201).send({
            message: "Nova compra cadastrado com sucesso!",
            purchase: purchase
        });
        
    } catch(error: any){
        res.status(500).send(error.message || error.sqlMessage);
    };
};