import { Request, Response } from "express";
import Product from "../entities/Product";
import ProductDataBase from "../data/ProductDataBase";

export const createProduct = async (req: Request, res: Response) => {
    try{
        const { name, description, price } = req.body;

        if (!name || !description || !price){
            throw new Error("Por favor, preencha todos os campos!")
        };

        const id = Date.now() + Math.random().toString();

        const product = new Product(id, name, description, price);

        await new ProductDataBase().insertProduct(product);

        res.status(201).send({
            message: "Novo produto cadastrado com sucesso!",
            product: product
        });
        
    } catch(error: any){
                res.status(500).send(error.message || error.sqlMessage);
    };
};