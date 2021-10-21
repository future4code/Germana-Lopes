import { Request, Response } from "express";
import ProductDataBase from "../data/ProductDataBase";


export const getAllTrips = async (req: Request, res: Response) => {
    try {

        const returnList = await new ProductDataBase().getAllTrips();

        res.status(200).send(returnList);

    } catch(error: any){
        res.status(500).send(error.message || error.sqlMessage)
    };
};