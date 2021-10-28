import express from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

// HERANÇA

// EXERCÍCIO 1:
// class User {
//   constructor(
//     private id: string,
//     private email: string,
//     private name: string,
//     private password: string
//   ) {
//     console.log("Chamando o construtor da classe User")
//   }

//   public getId(): string {
//     return this.id
//   }

//   public getEmail(): string {
//     return this.email
//   }

//   public getName(): string {
//     return this.name
//   }

//   // esse abaixo eu fiz pra testar! 
//   public nameAndMail(): string {
//     return `Olá, me chamo ${this.name} e meu e-mail é ${this.email}`
//   }

//   // Exercício 4 e 5
//   public introduceYourself(): string {
//     return `Olá, meu nome é ${this.name}! Bom dia =D`
//  }
// };

// const user1: User = new User("1", "spam@gmail.com", "El Bot Terrorista", "senhahihihi")
// console.log(user1)
// // console.log(user1.getId())
// // console.log(user1.getName())
// // console.log(user1.getEmail())
// // console.log(user1.nameAndMail())


// // EXERCÍCIO 2
// class Customer extends User {
//   public purchaseTotal: number = 0;
//   private creditCard: string;

//   constructor(
//     id: string,
//     email: string,
//     name: string,
//     password: string,
//     creditCard: string
//   ) {
//     super(id, email, name, password);
//     console.log("Chamando o construtor da classe Customer");
//     this.creditCard = creditCard;
//   }

//   public getCreditCard(): string {
//     return this.creditCard;
//   }
// }

// const customer1: Customer = new Customer("1", "client@superbuyer.com", "Super Shopper", "bigbuyer", "1234567-89")

// console.log(customer1)
// // EXERCÍCIO 3 
// console.log(customer1.getEmail());
// console.log(customer1.getId());
// console.log(customer1.getName());
// console.log(customer1.getCreditCard());
// console.log(customer1.purchaseTotal);
// // EXERCÍCIO 4 e 5
// console.log(customer1.introduceYourself())



// POLIMORFISMO
// EXERCÍCIO 1
// export interface Client {
//   name: string;
//   registrationNumber: number;
//   consumedEnergy: number;
//   calculateBill(): number;
// };

// const client1: Client = {
//   name: "Germana",
//   registrationNumber: 2,
//   consumedEnergy: 50,
//   calculateBill: () => {
//     return 2;
//   }
// };

// // console.log(client1.name)
// // console.log(client1.consumedEnergy)
// // console.log(client1.calculateBill())

// // EXERCÍCIO 2
// export abstract class Place {
//   constructor(protected cep: string) { }

//   public getCep(): string {
//     return this.cep;
//   }
// }

// // const place1: Place = new Place("90908-370")

// // EXERCÍCIO 3
// export class Residence extends Place {
//   constructor(
//     protected residentsQuantity: number,
//     // Refere-se ao número de moradores da casa

//     cep: string
//   ) {
//     super(cep);
//   }

//   public getResidentQuantity = () => {
//     return this.residentsQuantity
//   }
// }

// export class Commerce extends Place {
//   constructor(
//     protected floorsQuantity: number,
//     // Refere-se à quantidade de andares do lugar

//     cep: string
//   ) {
//     super(cep);
//   };

//   public getFloorsQuantity = () => {
//     return this.floorsQuantity;
//   };
// };

// export class Industry extends Place {
//   constructor(
//     protected machinesQuantity: number,
//     // Refere-se à quantidade de máquinas do local 

//     cep: string
//   ) {
//     super(cep);
//   };

//   public getMachinesQuantity = () => {
//     return this.machinesQuantity;
//   };
// };

// const residence1: Residence = new Residence(5, "90902-909")
// const commerce1: Commerce = new Commerce(3, "98073-009")
// const industry1: Industry = new Industry(200, "47839-230")

// console.log(residence1.getCep())
// console.log(commerce1.getCep())
// console.log(industry1.getCep())


// // EXERCÍCIO 4
// export abstract class Place {
//   constructor(protected cep: string) { }

//   public getCep(): string {
//     return this.cep;
//   };
// };

// interface Client {
//   name: string;
//   registrationNumber: number;
//   consumedEnergy: number;
//   calculateBill(): number;
// };

// export class Residence extends Place {
//   constructor(
//     protected residentsQuantity: number,
//     cep: string
//   ) {
//     super(cep);
//   };

//   public getResidentsQuantity = () => {
//     return this.residentsQuantity;
//   };
// };

// class ResidentialClient extends Residence implements Client {
//   constructor(
//     private cpf: string,
//     residentsQuantity: number,
//     cep: string,
//     public name: string,
//     public registrationNumber: number,
//     public consumedEnergy: number
//   ) {
//     super(residentsQuantity, cep)
//   };

//   public getCpf() {
//     return this.cpf;
//   }

//   public calculateBill = (): number => {
//     return this.consumedEnergy * 0.75;
//   };
// };

// const clientResidential1: ResidentialClient = new ResidentialClient("123.456.789-24", 4, "90902-909", "Quiboa Pomps", 5, 900)
// // console.log(clientResidential1)
// console.log(clientResidential1.calculateBill())

// EXERCÍCIO 5
// export abstract class Place {
//   constructor(protected cep: string) { }

//   public getCep(): string {
//     return this.cep;
//   };
// };

// export class Commerce extends Place {
//   constructor(
//     protected floorsQuantity: number,
//     cep: string
//   ) {
//     super(cep);
//   };

//   public getFloorsQuantity = () => {
//     return this.floorsQuantity;
//   };
// };

// interface Client {
//   name: string;
//   registrationNumber: number;
//   consumedEnergy: number;
//   calculateBill(): number;
// };

// class CommercialClient extends Commerce implements Client {
//   constructor(
//     private cnpj: string,
//     floorsQuantity: number,
//     cep: string,
//     public name: string,
//     public registrationNumber: number,
//     public consumedEnergy: number
//   ) {
//     super(floorsQuantity, cep)
//   };

//   public calculateBill = (): number => {
//     return this.consumedEnergy * 0.53;
//   };

//   public getCnpj() {
//     return this.cnpj;
//   }
// };

// const clientComercial1: CommercialClient = new CommercialClient("123.456.789-24", 4, "90902-909", "Quiboa Pomps", 5, 900)
// console.log(clientComercial1.calculateBill())

// Exercício 6

export abstract class Place {
  constructor(protected cep: string) { }

  public getCep(): string {
    return this.cep;
  };
};

export class Industry extends Place {
  constructor(
    protected floorsQuantity: number,
    cep: string
  ) {
    super(cep);
  };

  public getFloorsQuantity = () => {
    return this.floorsQuantity;
  };
};

interface Client {
  name: string;
  registrationNumber: number;
  consumedEnergy: number;
  calculateBill(): number;
};

class IndustrialClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private insdustryNumber: string, // tanto faz ser string ou number
    public machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }

  public getIndustryNumber(): string {
    return this.insdustryNumber;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }
}





const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app

