import { connection } from "./connection";

export const USER_TABLE = "User_Arq";

const createTable = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS User_Arq(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                role ENUM ("ADMIN", "NORMAL") DEFAULT "NORMAL"
            );
        `);

        // console.log("Tabela criada com sucesso!");

    } catch (error: any) {
        console.log(error.message || error.sqlMessage);
    } finally {
        connection.destroy();
    };
};

createTable();