import express, { Express, Request, Response } from 'express';
import knex from "knex";
import cors from "cors";
import { AddressInfo } from "net";
import connection from './setup/connection';
import { v4 as uuidv4 } from 'uuid';
import { createTables } from './setup/tables';
import { dateFormat, dateToDBFormat } from './setup/changeDate';

const app: Express = express();
app.use(express.json());
app.use(cors());


// primeiro EndPoint: Criar usuário
const createUser = async (
    id: string,
    name: string,
    nickname: string,
    email: string
): Promise<void> => {
    try {
        await connection.raw(`
           INSERT INTO TodoListUser (id, name, nickname, email)
           VALUES (
               '${id}',
               '${name}',
               '${nickname}',
               '${email}'
           );
       `);
    } catch (error: any) {
        console.log(error.sqlMessage || error.message);
    };
};

app.post("/user", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { name, nickname, email } = req.body;

        if (!name || !nickname || !email) {
            errorCode = 422;
            throw new Error("Preencha corretamente todos os campos.");
        }

        const id = uuidv4();

        await createUser(id, name, nickname, email);

        res.status(200).send({
            message: "Usuário criado com sucesso!",
            user: {
                id: id,
                name: name,
                nickname: nickname,
                email: email
            }
        });
    } catch (error: any) {
        res.status(errorCode).send({
            message: error.sqlMessage || error.message,
        });
    }
});



// segundo EndPoint: Pegar usuário pelo ID
const getUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
     SELECT * FROM TodoListUser WHERE id = '${id}';
   `);

    return result[0][0];
};

app.get('/user/:id', async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const id = req.params.id as string;
        const user = await getUserById(id);

        if (!user) {
            errorCode = 404;
            throw new Error("Usuário não encontrado!")
        }

        res.status(200).send({
            message: 'Usuário encontrado!',
            user: {
                id: id,
                nickname: user.nickname
            }
        });
    } catch (error: any) {
        res.status(errorCode).send({
            message: error.sqlMessage || error.message
        });
    }
});

// terceiro EndPoint: Editar usuário
const editUser = async (
    id: string,
    name: string,
    nickname: string
): Promise<void> => {
    await connection("TodoListUser")
        .update({ name: name, nickname: nickname })
        .where("id", id);
};

app.put('/user/edit/:id', async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const id = req.params.id as string;
        const { name, nickname } = req.body;
        const user = await getUserById(id);

        if (!name && !nickname) {
            errorCode = 422;
            throw new Error("Preencha os campos corretamente.");
        }

        if (!user) {
            errorCode = 404;
            throw new Error("Usuário não encontrado!")
        }

        await editUser(id, name || user.name, nickname || user.nickname);

        res.status(200).send({
            message: 'Usuário editado!',
            user: {
                name: name || user.name,
                nickname: nickname || user.nickname
            }
        });
    } catch (error: any) {
        res.status(errorCode).send({
            message: error.sqlMessage || error.message
        });
    };
});

// quarto EndPoint: Criar Tarefa
const createTask = async (
    task: {
        id: string,
        title: string,
        description: string,
        status: string,
        limit_date: string,
        creator_user_id: string
    }
): Promise<void> => {
    await connection("TodoListTask")
        .insert(task);
};

app.post("/task", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { title, description, limitDate, creatorUserId } = req.body;

        if (!title || !description || !limitDate) {
            errorCode = 422;
            throw new Error("Preencha corretamente todos os campos.");
        }

        const creatorUser = await getUserById(creatorUserId);

        if (!creatorUser) {
            errorCode = 404;
            throw new Error("Usuário informado não está cadastrado!");
        }

        const id = uuidv4();

        const creator_user_id = uuidv4();

        const task = {
            id: id,
            title: title,
            description: description,
            status: "",
            limit_date: limitDate,
            creator_user_id: creatorUserId
        }

        await createTask(task);

        res.status(200).send({
            message: "Tarefa adicionada com sucesso!"
        });
    } catch (error: any) {
        res.status(errorCode).send({
            message: error.sqlMessage || error.message,
        });
    }
});

// quinto EndPoint: Pegar tarefa pelo id
const getTaskById = async (id: string): Promise<any> => {
    const result = await connection('TodoListTask')
        .select(
            'id as taskId',
            'title',
            'description',
            'status',
            'limit_date as limitDate',
            'creator_user_id as creatorUserId'
        )
        .where('id', id);

    return result[0];
};

app.get('/task/:id', async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const id = req.params.id as string;
        const task = await getTaskById(id);

        if (!task) {
            errorCode = 404;
            throw new Error("Tarefa não encontrada!")
        }

        const formatDate = dateFormat(task.limitDate);

        res.status(200).send({
            message: 'Tarefa acessada com sucesso!',
            task: {
                taskId: id,
                title: task.title,
                description: task.description,
                status: task.status,
                limitDate: formatDate,
                creatorUserId: task.creatorUserId
            }
        });
    } catch (error: any) {
        res.status(errorCode).send({
            message: error.sqlMessage || error.message
        });
    }
});

// sexto EndPoint: Pegar todos os usuários
const getAllUsers = async (): Promise<any> => {
    try {
        const result = await connection("TodoListUser")
            .select();
        return result;
    } catch (error: any) {
        console.log(error.sqlMessage || error.message);
    };
};

app.get("/user/all", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const users = await getAllUsers();

        res.status(200).send({
            message: "Lista de usuários",
            quantity: users.length,
            users: users
        });
    } catch (error: any) {
        res.status(errorCode).send({
            message: error.sqlMessage || error.message
        })
    };
});


// servidor 
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
