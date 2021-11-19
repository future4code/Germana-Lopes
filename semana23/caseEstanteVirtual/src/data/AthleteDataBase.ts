import BaseDataBase from "./BaseDataBase";
import { athleteTableName } from "./migrations";


export default class AthleteDataBase extends BaseDataBase {

    public insertAthlete = async (athlete:any): Promise<any> =>{
        const result = await BaseDataBase.connection(athleteTableName)
            .insert({
                id: athlete.id,
                athleteName: athlete.athleteName,
            });
        return result[0];
    };
}