import { getTokenData } from "../services/authenticator";
import { Request, Response } from "express";
import connection from "../data/connection";
import { userTableName } from "../data/migrations";



export default async function getProfile(
    req: Request,
    res: Response
): Promise<void> {
    try {
    
        const token: string = req.headers.authorization!;

        const tokenData = getTokenData(token);

        if(!tokenData){
            res.statusCode = 401;
            throw new Error("Não autorizado!");
        };

        const [user] = await connection(userTableName)
            .where ({ id: tokenData?.id });

        if(!user){
            res.statusCode = 404;
            throw new Error("Usuária não encontrada!");
        };

        const { id, email, name } = user;

        res.send ({ id, email, name });

    } catch (error: any) {
        if(res.statusCode === 200){
            res.status(500).send("Internal server error");
        } else {
            res.send(error.message)
        };
    };
};