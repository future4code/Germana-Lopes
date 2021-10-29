import { PostDTO } from "./entities/Post";
import { IdGenerator } from "./services/idGenerator";
import { Post } from "./entities/Post";
import PostDataBase from "../data/PostDataBase";
import { Authenticator } from "./services/authenticator";


export default class PostBusiness {
   
    async createPost(postDTO: PostDTO) {

        const randomId = new IdGenerator().generateId();

        const postModel: Post = {
            id: randomId,
            photo: postDTO.photo,
            description: postDTO.description,
            type: postDTO.type,
            author_Id: postDTO.author_Id
        };

        const savedPost = await new PostDataBase().insertPost(postModel);

        return {
            post: postModel
        };
    };

    async getPostById (
        token: string,
        id: string
    ): Promise<Post> {
        Authenticator.getTokenData(token);
        
        if (!id) {
            throw new Error("O ID deve ser informado!");
        };

        const post: Post = await new PostDataBase().findPostByPropriety("id", id);

        if (!post) {
            throw new Error("Post não encontrado");
        };

        return post;
    };

}
