export interface User {
    id: string
    name: string
    email: string
    passwordHash: string
};

export interface SignupDTO {
    name: string
    email: string
    password: string
};

export interface LoginDTO {
    email: string
    password: string
};