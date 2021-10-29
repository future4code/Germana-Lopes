import { Request, Response } from "express";
import connection from "../data/connection";
import { generateToken } from "../services/authenticator";
import { generateHash } from "../services/hashManager";
import { userTableName } from "../data/migrations";
import generateId from "../services/idGenerator";


export default async function signup(
    req: Request,
    res: Response
): Promise<void> {

    try {

        const { name, email, password } = req.body

        if (!name || !email || !password) {
            res.statusCode = 422
            throw new Error("'name', 'email' and 'password' precisam ser preenchidos!")
        }
        if (password.length < 6) {
            res.statusCode = 422
            throw new Error("A senha precisa ter no mínimo 6 caracteres!")
        }


        const [user] = await connection(userTableName)
            .where({ email })

        if (user) {
            res.statusCode = 409
            throw new Error("Email já cadastrado, tente outro endereço!")
        }

        const id: string = generateId()

        const cypherPassword: string = generateHash(password)

        const token: string = generateToken({ id })


        await connection(userTableName)
            .insert({ id, name, email, password: cypherPassword })

        res.send({ token })
    } catch (error) {

        if (res.statusCode === 200) {
            res.status(500).send("Internal server error")
            console.log(error)
        } else {
            res.send({ error: `${error}` })
        }
    }
}