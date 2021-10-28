import { hash } from "./services/hashManager";
import { authenticationData } from "./entities/user";
import { generateToken } from "./services/authenticator";
import { generateId } from "./services/idGenerator";
import { insertUser } from "../data/userDataBase";
import { user } from "./entities/user";


export const signupBusiness = async ({ name, email, password, role }: any) => {
    try {
        if (!name || !email || !password) {
            throw new Error("Preencha todos os campos: name, email, password")
        }

        const id: string = generateId()

        const hashPass = await hash(password);
        console.log('hashPass', hashPass)

        await insertUser({
            id,
            name,
            email,
            password: hashPass,
            role
        })
        const token: string = generateToken({
            id,
            role: role
        })

        return token
    } catch (error) {
        
    }

}