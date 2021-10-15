import { Request, Response } from "express";
import PurchaseDataBase from "../data/PurchaseDataBase";

export const getAllPurchases = async (req: Request, res: Response) => {
    try {
        const returnList = await new PurchaseDataBase().getAllPurchases();

        res.status(200).send(returnList);

    } catch(error: any){
        res.status(500).send(error.message || error.sqlMessage)
    };
};