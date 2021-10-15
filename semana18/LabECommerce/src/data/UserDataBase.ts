import User from "../entities/User";
import BaseDataBase from "./BaseDataBase";
import { usersTableName } from "./TableDataBase";

export default class UserDataBase extends BaseDataBase {
    static getUsers() {
        throw new Error("Algo deu errado!");
    }

    public insertUser = async (user: User): Promise<any> => {
        const result = await BaseDataBase.connection(usersTableName)
            .insert({
                id: user.getId(),
                name: user.name,
                email: user.email,
                age: user.age
            });
        return result;
    };

    public getUsers = async (): Promise<User[]> => {
        let result: User[] = [];

        const users = await BaseDataBase.connection("User")
            .select();

        for (let user of users) {
            const userInClass = new User(user.id, user.name, user.email, user.age);

            result.push(userInClass);
        };

        return result;
    };

    public selectUserById = async (userId: string): Promise<any> =>{
        const result = await BaseDataBase.connection.raw(`
                SELECT * FROM ${usersTableName}
                WHERE id = "${userId}"
                ;
            `);
            return result[0]
    };

    public selectUsersAndPurchases = async (): Promise<any> =>{
        const result = await BaseDataBase.connection.raw(`
            SELECT users.id AS userID, users.name AS userName, users.age, users.email, purchases.id AS purchasesID, purchases.product_id AS productID, purchases.quantity, purchases.total_value FROM labcommerce_backend_users AS users
            JOIN labcommerce_backend_purchase AS purchases
            ON users.id = purchases.user_id;
        `);
        return result[0]
    };

}