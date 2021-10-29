import { Request, Response } from "express";
import connection from "../data/connection";
import { userTableName } from "../data/migrations";
import { compareHash } from "../services/hashManager";
import { generateToken } from "../services/authenticator";



export default async function login(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.statusCode = 422;
            throw new Error("'email' and 'password' precisam ser preenchidos!");
        };

        const [user] = await connection(userTableName)
            .where({ email });
       

        if (!user) {
            res.statusCode = 401;
            throw new Error("Usuário não cadastrado!");
        };

        const passwordIsCorrect: boolean = compareHash(password, user.password);

        if (!passwordIsCorrect) {
            res.statusCode = 401;
            throw new Error("Senha incorreta!");
        };

        const token = generateToken({ id: user.id });

        res.send({ token });

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send("Internal server error");
        } else {
            res.send(error.message)
        };
    };
};