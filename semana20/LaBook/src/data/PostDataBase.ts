import BaseDataBase from "./BaseDataBase";
import { Post } from "../business/entities/Post";
import { postTableName } from "./migrations";
import { Request, Response } from "express";

export default class PostDataBase extends BaseDataBase {
    
    public insertPost = async (post: Post): Promise<any> => {
        const result = await BaseDataBase.connection(postTableName)
            .insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                author_id: post.author_Id,
            });
            return result;
    };

    public findPostByPropriety = async (
        name: string,
        value: string
    ): Promise<Post> => {
        const result = await BaseDataBase.connection(postTableName)
            .select("*")
            .where(name, "=", value);
    
        return (result[0]);
    };
}