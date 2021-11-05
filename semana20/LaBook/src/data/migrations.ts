import BaseDataBase from "./BaseDataBase";

export const userTableName = "labook_users";
export const postTableName = "labook_posts";

export class migrations extends BaseDataBase {

   static createTables = async () => {
      try {
         await BaseDataBase.connection.raw(`
             CREATE TABLE IF NOT EXISTS ${userTableName}(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
             );
          `)

         await BaseDataBase.connection.raw(`
             CREATE TABLE IF NOT EXISTS ${postTableName}(
                id VARCHAR(255) PRIMARY KEY,
                photo VARCHAR(255) NOT NULL,
                description VARCHAR(255) NOT NULL,
                type ENUM("normal","event") DEFAULT "normal",
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                author_id VARCHAR(255),
                FOREIGN KEY (author_id) REFERENCES labook_users (id)
             );
          `)

         console.log("Tabelas criadas com sucesso!");
      } catch (error) {
         console.log(error)
      };
   };
};

//   migrations.createTables();