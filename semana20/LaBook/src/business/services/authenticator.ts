import * as jwt from "jsonwebtoken";

interface AuthenticationData {
    id: string
};

export class Authenticator {
    generateToken(info: AuthenticationData): string {
        const token = jwt.sign(
            { id: info.id },
            process.env.JWT_KEY as string,
            { expiresIn: "2 days" }
        );
        return token;
    };

    public static getTokenData(
        token: string
    ): AuthenticationData {
        const result: any = jwt.verify(
            token,
            process.env.JWT_KEY as string
        );

        return { id: result.id, };
    };
};