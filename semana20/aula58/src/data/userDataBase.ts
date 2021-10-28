import { user } from "../business/entities/user";
import { connection } from "./connection";
import { USER_TABLE } from "./migrations";


export const insertUser = async (user: user) => {
    await connection.insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role
    }).into(USER_TABLE);
};