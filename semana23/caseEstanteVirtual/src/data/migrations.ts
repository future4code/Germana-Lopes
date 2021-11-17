import BaseDataBase from "./BaseDataBase";

export const competitionsTableName = "competitions"
export const resultsTableName = "athlete_results"
export const athleteTableName = "athlete"


export default class TableDataBase extends BaseDataBase {
    public createTables = async () : Promise<void> => {
        await BaseDataBase.connection.raw(`
            CREATE TABLE IF NOT EXISTS ${competitionsTableName} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                name VARCHAR(64) NOT NULL,
                status ENUM('in_progress','finished') DEFAULT 'in_progress'
            );

            CREATE TABLE IF NOT EXISTS ${athleteTableName} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                name VARCHAR(64) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS ${resultsTableName} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                value FLOAT NOT NULL,
                unit ENUM('s','m'),
                athlete_id VARCHAR(64) NOT NULL,
                competition_id VARCHAR(64) NOT NULL,
                FOREIGN KEY (competition_id) REFERENCES ${competitionsTableName}(id),
                FOREIGN KEY (athlete_id) REFERENCES ${athleteTableName}(id)  
            );
        `)
        .then(()=> { console.log("MySQL tables created successfully!") })
        .catch((error)=> { console.log(error.message) })
    };

};

new TableDataBase().createTables()