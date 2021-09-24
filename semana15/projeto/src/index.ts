import express, { Express, Request, Response } from 'express';
import cors from 'cors'
import { AddressInfo } from "net";
import { Account, User, Transaction, accounts } from "./data";
import { checkIfIsOver18 } from './functions';


const app: Express = express();

app.use(express.json());
app.use(cors());

// Primeiro EndPoint => createAccount
app.post("/account", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const { name, cpf, birthDate } = req.body;

        if (!name || !cpf || !birthDate) {
            errorCode = 422;
            throw new Error("Preencha corretamente os dados.");
        };

        const currentDate = new Date();
        const date = new Date(birthDate);

        if (!checkIfIsOver18(
            currentDate,
            date
        )) {

        }

        const users = accounts.map((account) => account.client);
        const matchCPF = users.find(((user: User) => user.cpf === cpf));

        if (matchCPF) {
            errorCode = 422;
            throw new Error("CPF já cadastrado.")
        };

        const user: User = {
            name: name,
            cpf: cpf,
            birthDate: birthDate
        };

        const reqBody: Account = {
            client: user,
            balance: 0,
            extract: []
        };

        accounts.push(reqBody);

        res.status(200).send({ message: "Success", account: reqBody });
    } catch (error: any) {
        res
            .status(errorCode)
            .send(error.message);
    };
});

// Segundo EndPoint => getBankBalance
app.get("/account", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const { name, cpf } = req.body;

        if (!name || !cpf) {
            errorCode = 422;
            throw new Error("Por favor, informe nome e CPF para continuar");
        };

        const result = accounts.find((account) =>
            account.client.name === name && account.client.cpf === cpf
        );

        if (!result) {
            errorCode = 404;
            throw new Error("Nenhuma conta encontrada");
        } else
            res.status(200).send({ message: "Success", balance: result.balance });
    } catch (error: any) {
        res
            .status(errorCode)
            .send(error.message);
    };
});

// Terceiro EndPoint addDeposit
app.put("/account/deposit", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const { name, cpf, amount } = req.body;

        if (!name || !cpf || !amount) {
            errorCode = 422;
            throw new Error("Preencha corretamente as informações.");
        };

        const index = accounts.findIndex((account) =>
            account.client.name === name && account.client.cpf === cpf
        );

        if (index === -1) {
            errorCode = 404;
            throw new Error("Usuário não encontrado.");
        };

        let balance: number = accounts[index].balance;
        balance += Number(amount);

        res.status(200).send({ message: "Success", depositValue: amount, currentBalance: balance });
    } catch (error: any) {
        res
            .status(errorCode)
            .send(error.message);
    };
});

// Quarto EndPoint => billPayments
app.put("/account/payment", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const { name, cpf, value, date, description } = req.body;
        let paymentDate: string = new Date().toLocaleDateString("pt-BR");

        if (!name || !cpf || !value || !description) {
            errorCode = 422;
            throw new Error("Preencha corretamente as informações.");
        };

        const index = accounts.findIndex((account) =>
            account.client.name === name && account.client.cpf === cpf
        );

        if (index === -1) {
            errorCode = 404;
            throw new Error("Usuário não encontrado.");
        };

        const user: Account = accounts[index];

        const transaction: Transaction = {
            value: Number(value),
            date: paymentDate,
            description: description
        };

        const extract = accounts[index].extract;
        extract.push(transaction);

        res.status(200).send({ message: "Success", currentBalance: user.balance, extract: extract });
    } catch (error: any) {
        res
            .status(errorCode)
            .send(error.message);
    };
});


// Quinto EndPoint => internTransfer
app.put("/account/transfer", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const { senderName, senderCpf, recipientName, recipientCpf, amount } = req.body;

        if (!senderName || !senderCpf || !recipientName || !recipientCpf || !amount) {
            errorCode = 422;
            throw new Error("Preencha corretamente os campos.");
        };

        const senderIndex = accounts.findIndex((account) =>
            account.client.name === senderName && account.client.cpf === senderCpf
        );

        if (senderIndex === -1) {
            errorCode = 404;
            throw new Error("Remetente não encontrado. Tente novamente.");
        };

        const recipientIndex = accounts.findIndex((account) =>
            account.client.name === recipientName && account.client.cpf === recipientCpf
        );

        if (recipientIndex === -1) {
            errorCode = 404;
            throw new Error("Destinatário não encontrado. Tente novamente.");
        };

        const sender: Account = accounts[senderIndex];
        const recipient: Account = accounts[recipientIndex];

        if (sender.balance < Number(amount)) {
            errorCode = 400;
            throw new Error("Saldo insuficiente.");
        }

        sender.balance -= Number(amount);
        recipient.balance += Number(amount);

        res.status(200).send(
            {
                message: "Success",
                amount: amount,
                senderBalance: sender.balance,
                recipientBalance: recipient.balance
            }
        );
    } catch (error: any) {
        res
            .status(errorCode)
            .send(error.message);
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