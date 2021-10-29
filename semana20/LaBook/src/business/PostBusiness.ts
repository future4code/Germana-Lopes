import { PostDTO } from "./entities/Post";
import { IdGenerator } from "./services/idGenerator";
import { Post } from "./entities/Post";
import PostDataBase from "../data/PostDataBase";


export default class PostBusiness {
    async createPost (postDTO: PostDTO) {

        const randomId = new IdGenerator().generateId();

        const postModel: Post = {
            id: randomId,
            photo: postDTO.photo,
            description: postDTO.description,
            type: postDTO.type,
            authorId: postDTO.authorId
        };

        const savedPost = await new PostDataBase().insertPost(postModel);

        return {
            post: postModel
        };
    };

}
