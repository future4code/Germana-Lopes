import { Request, Response } from "express";
import { PostDTO } from "../business/entities/Post";
import PostBusiness from "../business/PostBusiness";

export default class PostController {
  
    async createPost (req: Request, res: Response){
        try {

            const postDTO: PostDTO = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
                authorId: req.body.authorId,
            };

            if (!postDTO.photo || !postDTO.description || !postDTO.type ) {
                res.statusCode = 400;
                throw new Error("Preencha todos os campos")
            };

            const result = await new PostBusiness().createPost(postDTO);

            res.status(201).send({ result })

        } catch (error: any){
            if(res.statusCode === 200){
                res.status(500).send(error.message);
            } else {
                res.send(error.message);
            };
        };
    };
}