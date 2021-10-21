import TableDataBase from "./TableDataBase";

const printError = ( error: any ) => { console.log(error.sqlMessage || error.message )};

const start = async () => {
    try{
        new TableDataBase().createTables()
           
    } catch( error: any ){
        printError (error)
    };
};

start();