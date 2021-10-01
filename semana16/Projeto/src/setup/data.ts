import { v4 as uuidv4 } from 'uuid';
import connection from './connection';

const populateUserTable = async (): Promise<void> => {
    try {
        await connection.raw(`
            INSERT INTO TodoListUser (id, name, nickname, email) VALUES 
            (
                '${uuidv4()}',
                'Hilton Tints',
                'tints_da_mae',
                'hilton@gmail.com'
            ),
            (
                '${uuidv4()}',
                'Quiboa Pomps',
                'good_quimbinbi',
                'quiboa@gmail.com'
            ),
            (
                '${uuidv4()}',
                'Pampa Cat',
                'pikitis',
                'pampacat@gmail.com'
            );
        `);

        console.log('3 users inserted to get you started!');
        connection.destroy();        
    } catch (error:any) {
        console.log(error.sqlMessage || error.message);
    };
};

populateUserTable();