import { USER_ROLES } from "../entities/user";

export const checkPassword = (password: string) : void => {
    if ( password.length < 6 ) {
        throw new Error("Senha deve ter mais de 6 caracteres!");
    };
};

export const checkValidRoles = (role: string) : void => {
    if ( role !== USER_ROLES.NORMAL && role !== USER_ROLES.ADMIN ) {
        throw new Error("Você precisa escolher entre: 'NORMAL' or 'ADMIN'");
    };
};