import { Request, Response } from 'express';
import { selectAllUsers, filterByName, selectOrderedUsers, usersPagination, searchUsers } from './queries';
import { userInfo } from "./userInfo" 

// endPoint dado no Notion 
export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 // Exercício 1: 
 export const getFilteredUsers = async(req: Request, res: Response): Promise<void> =>{
    try {
        const { name } = req.query as userInfo;

        if ( !name ) {
            throw new Error("'nome' é obrigatório");
        };

        const users: any = await filterByName("name", name);
    
        if(!users.length){
            res.statusCode = 404
            throw new Error("Nenhum usuário encontrado");
        };
    
        res.status(200).send(users);
       
    } catch (error: any) {
        console.log(error);
        res.send(error.message || error.sqlMessage);
    };
};

// Exercício 2:
export const getOrderedUsers = async(req: Request, res: Response): Promise<void> =>{
    try {
        const {
            orderBy = "email",
            orderType = "ASC",
        } = req.query as userInfo;

   
        if (!["name", "type"].includes(orderBy)) {
            res.statusCode = 422
            throw new Error(`Você só pode adicionar nome e/ou tipo`)
        }

        const users = await selectOrderedUsers(orderBy, orderType);
    
        if(!users.length){
            res.statusCode = 404
            throw new Error("Nenhum usuário encontrado");
        };
    
        res.status(200).send(users);
       
    } catch (error: any) {
        console.log(error);
        res.send(error.message || error.sqlMessage);
    };
};

// Exercício 3:
export const getUsersPagination = async(req: Request, res: Response): Promise<void> => {
    try {
        const {
            page = "1"
        } = req.query as userInfo;
        const pageNumber: number = Number(page);

        if (!pageNumber) {
            res.statusCode = 422
            throw new Error(`Número deve ser maior que 0!`)
        }
   
        const resultsPerPage: number = 5
        const offset: number = resultsPerPage * (pageNumber - 1)

        const users = await usersPagination(resultsPerPage, offset);
    
        if(!users.length){
            res.statusCode = 404
            throw new Error("Nenhum usuário encontrado");
        };
    
        res.status(200).send(users);
       
    } catch (error: any) {
        console.log(error);
        res.send(error.message || error.sqlMessage);
    };
};

// Exercício 4:
export const getUsers = async(req: Request, res: Response): Promise<void> => {
    try {
        const {
           name,
           type,
           orderBy = "name",
           orderType = "DESC",
           page = "1"
        } = req.query as userInfo;

        let key: string = "name";

        if ( !name ) { key = "type" };
  
        const pageNumber: number = Number(page)
  
        if (!["name", "type"].includes(orderBy)) {
            res.statusCode = 422
            throw new Error(`Você só pode incluir nome e tipo`)
        }
  
        if (!["ASC", "DESC"].includes(orderType)) {
           res.statusCode = 422
           throw new Error(`Valores válidos para "orderType" são "ASC" e "DESC"`)
        }
  
        if (!pageNumber) {
           res.statusCode = 422
           throw new Error(`"page" deve ser um número positivo`)
        }
  
        const resultsPerPage: number = 5
        const offset: number = resultsPerPage * (pageNumber - 1)

        const users = await searchUsers(
            orderBy,
            orderType,
            resultsPerPage,
            offset,
            key,
            name || type
        );

        if (!users.length) {
           res.statusCode = 404
           throw new Error("Nenhum usuário encontrado");
        };
  
        res.send(users);
  
    } catch (error: any) {
        res.send(error.sqlMessage || error.message);
    };
};