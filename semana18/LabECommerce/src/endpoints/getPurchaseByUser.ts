import { Request, Response } from "express";
import PurchaseDataBase from "../data/PurchaseDataBase";
import UserDataBase from "../data/UserDataBase";

export const getPurchaseByUserId = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userid;

        const user = await new UserDataBase().selectUserById(userId);

        if (user.length <= 0) {
            throw new Error("Usuári@ não encontrado!")
        }

        const purchaseDataBase = new PurchaseDataBase();

        const returnList = await purchaseDataBase.selectPurchaseByUserId(userId);

        if (returnList.length <= 0) {
            res.status(200).send("O usuário ainda não realizou nenhuma compra!");
        } else {
            res.status(200).send(returnList);
        }


    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage)
    };
};