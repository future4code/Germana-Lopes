import connection from "./connection";

const TABLE: string = "aula49";

// query dada no Notion
export const selectAllUsers = async () : Promise<any> => {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `);
 
    return result[0];
};

// Exercício 1: 
export const filterByName = async (key: string, value: string) : Promise<any> => {
    const result = await connection
    .select("*")
    .from("aula49")
    .where(`${name}`, "LIKE", `%${"nome"}%`);
 
    return result;
};

// Exercício 2:
export const selectOrderedUsers = async (
    orderBy: string,
    orderType: string
    ) : Promise<any> => {
    const result = await connection
    .select("*")
    .from("aula49")
    .orderBy(orderBy, orderType);
 
    return result;
};

// Exercício 3:
export const usersPagination = async (
    resultsPerPage: number,
    offset: number
    ) : Promise<any> => {
    const result = await connection
    .select("*")
    .from("aula49")
    .limit(resultsPerPage)
    .offset(offset)
 
    return result;
};

// Exercício 4:
export const searchUsers = async (
    orderBy: string,
    orderType: string,
    resultsPerPage: number,
    offset: number,
    key?: string, 
    value?: string
) : Promise<any> => {
const result = await connection
    .select("*")
    .from("aula48_exercicio")
    .where(`${key}`, "LIKE", `%${value? value : "%"}%`)  
    .orderBy(orderBy, orderType)
    .limit(resultsPerPage)
    .offset(offset);

return result;
};
