import { Request, Response } from "express";
import ProductDataBase from "../data/ProductDataBase";

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const order = req.query.order;

        if( order !== "ASC" && order !== "DESC" && order !== ""){
            throw new Error("A ordenação deverá ser 'ASC' ou 'DESC'");
        }

        const returnList = await new ProductDataBase().getAllProducts(order);

        res.status(200).send(returnList);

    } catch(error: any){
        res.status(500).send(error.message || error.sqlMessage)
    };
};