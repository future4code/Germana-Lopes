import UserDataBase from "../data/UserDataBase";
import { LoginDTO, SignupDTO, User } from "./entities/User";
import { Authenticator } from "./services/authenticator";
import { HashManager } from "./services/hashManager";
import { IdGenerator } from "./services/idGenerator";

export default class UserBusiness {
    private userDatabase: UserDataBase;
    private hashManager: HashManager;
    private authenticator: Authenticator;

    constructor() {
        this.userDatabase = new UserDataBase();
        this.hashManager = new HashManager();
        this.authenticator = new Authenticator();
    }

    async signUp(signupDTO: SignupDTO) {
        const verifyEmailAdress = await this.userDatabase.findUserByEmail(signupDTO.email);

        if (verifyEmailAdress) {
            throw new Error('Email já cadastrado!')
        };

        const randomId = new IdGenerator().generateId();

        const passwordHash = await this.hashManager.hash(signupDTO.password);

        const userModel: User = {
            id: randomId,
            email: signupDTO.email,
            name: signupDTO.name,
            passwordHash: passwordHash
        };

        const savedUser = await this.userDatabase.insertUser(userModel);

        const token = this.authenticator.generateToken({ id: savedUser.id });

        return {
            token: token,
            id: randomId,
        };
    };

    async login(loginDTO: LoginDTO) {
        const user = await this.userDatabase.findUserByEmail(loginDTO.email);

        if (!user) {
            throw new Error('Usuário não existe!')
        };

        const isPasswordCorrect: Boolean = await this.hashManager.compare(loginDTO.password, user.password);

        if (!isPasswordCorrect) {
            throw new Error('Senha incorreta!')
        };

        const token = this.authenticator.generateToken({ id: user.id });

        return {
            token: token,
            userID: user.id,
            userName: user.name,
            userMail: user.email
        };
    };

}

