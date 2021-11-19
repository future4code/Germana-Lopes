import AthleteResultDataBase from "../data/AthleteResultDataBase";
import { ResultDTO } from "../model/AthleteResult";
import { IdGenerator } from "../services/idGenerator";

export default class ResultBusiness {

    private athleteResultDataBase: AthleteResultDataBase;

    constructor() {
        this.athleteResultDataBase = new AthleteResultDataBase
    };

    async insertAthleteResult(body: any) {

        const resultDTO: ResultDTO = {
            competitionName: body.competitionName,
            athleteName: body.athleteName,
            value: body.value,
            unit: body.unit,
        };

        if (!resultDTO.competitionName || !resultDTO.value || !resultDTO.unit || !resultDTO.athleteName) {
            throw new Error("Preencha todos os campos corretamente!");
        };

        const randomId = new IdGenerator().generateId();

        const athleteResult = {
            id: randomId,
            competitionName: resultDTO.competitionName,
            athleteName: resultDTO.athleteName,
            value: resultDTO.value,
            unit: resultDTO.unit,
        };

        await this.athleteResultDataBase.insertResult(athleteResult);

        return athleteResult;

    };
}