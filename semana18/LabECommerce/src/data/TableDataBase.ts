import BaseDataBase from "./baseDataBase";


export const usersTableName = "labcommerce_backend_users"
export const productsTableName = "labcommerce_backend_products"
export const purchaseTableName = "labcommerce_backend_purchase"

export default class TableDataBase extends BaseDataBase {
    public createTables = async () : Promise<void> => {
        await BaseDataBase.connection.raw(`
            CREATE TABLE IF NOT EXISTS ${usersTableName} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                name VARCHAR(64) NOT NULL,
                email VARCHAR(64) NOT NULL UNIQUE,
                age INT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS ${productsTableName} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                name VARCHAR(120) NOT NULL,
                description VARCHAR(260) NOT NULL,
                price FLOAT NOT NULL,
                origin VARCHAR(120),
                destination VARCHAR(120)
            );

            CREATE TABLE IF NOT EXISTS ${purchaseTableName} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                user_id VARCHAR(64) NOT NULL,
                product_id VARCHAR(64) NOT NULL,
                quantity INT NOT NULL,
                total_value FLOAT NOT NULL,
                FOREIGN KEY (user_id) REFERENCES ${usersTableName}(id),
                FOREIGN KEY (product_id) REFERENCES ${productsTableName}(id)
            );
        `)
        .then(()=> { console.log("Tabelas criadas") })
        .catch(Error);
    }
};