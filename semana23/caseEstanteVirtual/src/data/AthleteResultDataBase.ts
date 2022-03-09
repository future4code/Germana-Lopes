import BaseDataBase from "./BaseDataBase";
import { resultsTableName } from "./migrations";

export default class AthleteResultDataBase extends BaseDataBase {

    public insertResult = async (athleteResult:any): Promise<any> =>{
        const result = await BaseDataBase.connection(resultsTableName)
            .insert({
                id: athleteResult.id,
                competitionName: athleteResult.competitionName,
                athleteName: athleteResult.athleteName,
                value: athleteResult.value,
                unit: athleteResult.unit,
            });
        return result;
    };
}