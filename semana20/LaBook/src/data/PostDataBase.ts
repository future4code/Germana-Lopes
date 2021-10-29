import BaseDataBase from "./BaseDataBase";
import { Post } from "../business/entities/Post";
import { postTableName } from "./migrations";

export default class PostDataBase extends BaseDataBase {
    public insertPost = async (post: Post): Promise<any> => {
        const result = await BaseDataBase.connection(postTableName)
            .insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                author_id: post.authorId,
            });
            return result;
    };

}