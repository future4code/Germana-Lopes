import express, { Express, Request, Response } from "express";
import cors from 'cors'
import { AddressInfo } from "net";
import { user, users } from "./users";
import { UserType } from "./users";

const app: Express = express();

app.use(express.json());
app.use(cors());

// EXERCÍCIO 1 => getAllUsers
// Reposta a) utilizamos o método GET
// Resposta b) a entidade que está sendo manipulada é USERS

app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const result = users.map(user => ({
            id: user.id,
            name: user.name
        }));

        res
            .status(200)
            .send(result);
    } catch (error: any) {
        res
        .status(errorCode)
        .send(error);
    };
});

// // EXERCÍCIO 2 => searchByUserType
// // Resposta a) Passei através de Path Params, já que é usado um tipo específico.
// // Resposta b) Sim, através do ENUM types

app.get("/users/:type", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const type: string = (req.params.type as string).toUpperCase();
        const validTypes: boolean = type === UserType.ADMIN || type === UserType.NORMAL

        if (!validTypes) {
            errorCode = 422;
            throw new Error("Tipo inválido");
        };

        const matches = users.filter(((user) => user.type === type));

        res.status(200).send({ message: "Success", quantity: matches.length, users: matches });
    } catch (error: any) {
         res
        .status(errorCode)
        .send(error);
    };
});

// EXERCÍCIO 3 => 
// Resposta letra a) O envio de parâmetro utilizado aqui é o PATH PARAMS

app.get("/users/:name", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const result = users.find(
            user => user.name === req.params.name
        );

        if (result) {
            res.status(200).send(result);
        }
    } catch (error: any) {
        res
            .status(errorCode)
            .send(error);
    };
});


// EXERCÍCIO 4 => createUser
// Resposta letra a) O que mudou foi apenas um novo user com id diferente
// Resposta letra b) Creio que sim, pois ao criar o id diferente a cada vez fica mais fácil de criar novos usuários

app.post("/user", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const { id, name, email, type, age } = req.body;
        const validTypes: boolean = type === UserType.ADMIN || type === UserType.NORMAL
        const reqBody: user = {
            id: id,
            name: name,
            email: email,
            type: type,
            age: age
        };

        if (!id || !name || !email || !type || !age) {
            errorCode = 422;
            throw new Error("Preencha corretamente todos os campos.");
        };

        if (!validTypes) {
            errorCode = 422;
            throw new Error("Tipo de usuário inválido");
        };

        users.push(reqBody);

        res.status(200).send({ message: "Usuário criado com sucesso!", user: reqBody });
    } catch (error: any) {
        res
            .status(errorCode)
            .send(error);
    };
});


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});