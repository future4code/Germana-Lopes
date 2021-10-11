import express from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

// EXERCÍCIO 1:
// letra a) Construtor é método obrigatório no paradigma POO que define as regras de inicialização de uma classe.
// Para chamá-lo basta usar a sintaxe constructor() {} 

// letra b)
// A mensagem "Chamando o construtor da classe User" foi impressa apenas uma vez.

type Transaction = {
  description: string,
  value: number,
  date: string
};

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
    cpf: string,
    name: string,
    age: number,
  ) {
    console.log("Chamando o construtor da classe UserAccount")
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

}

// const userTest1: UserAccount = new UserAccount("123.321.123-11", "Hilton Tints", 68)
// console.log(userTest1)

// letra c) 
// Para acessar propriedades privadas de uma classe devemos criar métodos de classe do tipo público que chamem as 
//informações que estão privadas.

// EXERCÍCIO 2:

// class Transaction {
//   private description: string;
//   private value: number;
//   private date: string;

//   constructor(description: string, value: number, date: string) {
//     this.description = description;
//     this.value = value;
//     this.date = date
//   }
// }

// const transactionTest: Transaction = new Transaction("Primeira transação de teste", 420, "2021-10-11")
// console.log(transactionTest)


// EXERCÍCIO 3:

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
  };

  public getAccounts() {
      return this.accounts;
  };

  public setAccounts(newAccount: UserAccount) {
      this.accounts.push(newAccount);

      return "Nova conta de usuário inserida";
  };
};

const userTest1: UserAccount = new UserAccount("123.321.123-11", "Hilton Tints", 68)
const userTest2: UserAccount = new UserAccount("111.111.111.69", "Opa Cat", 21)

const accounts: Bank = new Bank([userTest1]); 

console.log(accounts.setAccounts(userTest2))
console.log(accounts.getAccounts());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


