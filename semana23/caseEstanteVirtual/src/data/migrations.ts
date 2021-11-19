import BaseDataBase from "./BaseDataBase";

export const competitionsTableName = "competitions"
export const resultsTableName = "athlete_results"
export const athleteTableName = "athlete"


export default class TableDataBase extends BaseDataBase {
    public createTables = async () : Promise<void> => {
        await BaseDataBase.connection.raw(`
            CREATE TABLE IF NOT EXISTS ${competitionsTableName} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                competitionName VARCHAR(64) NOT NULL,
                status ENUM('in_progress','finished') DEFAULT 'in_progress'
            );

            CREATE TABLE IF NOT EXISTS ${athleteTableName} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                athleteName VARCHAR(64) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS ${resultsTableName} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                competitionName VARCHAR(64) NOT NULL,
                athleteName VARCHAR(64) NOT NULL,
                value FLOAT NOT NULL,
                unit ENUM('s','m'),
                FOREIGN KEY (competitionName) REFERENCES ${competitionsTableName}(id),
                FOREIGN KEY (athleteName) REFERENCES ${athleteTableName}(id)  
            );
        `)
        .then(()=> { console.log("MySQL tables created successfully!") })
        .catch((error)=> { console.log(error.message) })
    };

};

// new TableDataBase().createTables()