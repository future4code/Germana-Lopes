import { User } from "../business/entities/User";
import BaseDataBase from "./BaseDataBase";
import { userTableName } from "./migrations";


export default class UserDataBase extends BaseDataBase {
    public insertUser = async (user: User): Promise<any> => {
        const result = await BaseDataBase.connection(userTableName)
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.passwordHash
            });
        return result;
    };

    public findUserByEmail = async (email: string): Promise<any> => {
        const result = await BaseDataBase.connection(userTableName)
            .select('*')
            .where({
                email: email
            });
        return result[0];
    };
}