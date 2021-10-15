import { Request, Response } from "express";
import UserDataBase from "../data/UserDataBase";


export const getAllUsers = async (
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode: number = 422;

    try {
        const users = await UserDataBase.getUsers();

        const result = await UserDataBase.getUsers();

        res.status(200).send({ users: result });
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message ? error.message : error.sqlMessage });
    };
};
