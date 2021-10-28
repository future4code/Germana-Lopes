import { Request, Response } from "express";
import { LoginDTO, SignupDTO } from "../business/entities/User";
import UserBusiness from "../business/UserBusiness";


export default class UserController {
    private userBusiness: UserBusiness;

    constructor() {
        this.userBusiness = new UserBusiness();
    }

    async signup(req: Request, res: Response) {
        try {

            const signupDTO: SignupDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            };

            if (!signupDTO.email || !signupDTO.name || !signupDTO.password) {
                res.statusCode = 400;
                throw new Error("Todos os campos são obrigatórios!");
            };

            if (signupDTO.email.indexOf("@") === -1) {
                res.statusCode = 400;
                throw new Error("Endereço precisa ser de um e-mail válido!");
            };

            const result = await new UserBusiness().signUp(signupDTO);

            if (!result) {
                res.statusCode = 400;
            }

            res.status(201).send({ result })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send(error.message);
            } else {
                res.send(error.message);
            };
        };
    }

    async login(req: Request, res: Response) {
        try {

            const loginDTO: LoginDTO = {
                email: req.body.email,
                password: req.body.password,
            };

            if (!loginDTO.email || !loginDTO.password) {
                res.statusCode = 400;
                throw new Error("Todos os campos são obrigatórios!");
            };

            if (loginDTO.email.indexOf("@") === -1) {
                res.statusCode = 400;
                throw new Error("Digite um email válido!");
            };

            const output = await new UserBusiness().login(loginDTO);

            res.status(202).send({ output })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send(error.message);
            } else {
                res.send(error.message);
            };
        };

    };
}