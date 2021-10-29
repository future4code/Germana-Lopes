import { Request, Response } from "express";
import { PostDTO } from "../business/entities/Post";
import PostBusiness from "../business/PostBusiness";

export default class PostController {
    
    async createPost(req: Request, res: Response) {
        try {

            const postDTO: PostDTO = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
                author_Id: req.body.author_Id,
            };

            if (!postDTO.photo || !postDTO.description || !postDTO.type) {
                res.statusCode = 400;
                throw new Error("Todos os campos são obrigatórios!")
            };

            const result = await new PostBusiness().createPost(postDTO);

            res.status(201).send({ result })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send(error.message);
            } else {
                res.send(error.message);
            };
        };
    };

    async getPostById (
        req: Request, 
        res: Response
    ): Promise<void>  {
        try {
            const { id } = req.params;
            const token: string = req.headers.authorization!;

            const post = await new PostBusiness().getPostById(token, id);
        
            res.status(200).send({ post });
        
        } catch (error: any) {
            res.status(error.statusCode || 400).send({
                message: error.sqlMessage || 
                error.message 
            });
        };          
    };
}