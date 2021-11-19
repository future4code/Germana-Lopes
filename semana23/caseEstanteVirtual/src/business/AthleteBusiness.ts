import AthleteDataBase from "../data/AthleteDataBase";
import { AthleteDTO } from "../model/Athlete";
import { IdGenerator } from "../services/idGenerator";

export default class AthleteBusiness {

    private athleteDataBase: AthleteDataBase;

    constructor() {
        this.athleteDataBase = new AthleteDataBase()
    };

    async insertAthlete(athleteDTO: AthleteDTO) {


        if (!athleteDTO.athleteName) {
            throw new Error("Preencha o nome da atleta!");
        };

        const randomId = new IdGenerator().generateId();

        const athlete = {
            id: randomId,
            athleteName: athleteDTO.athleteName
        };

        await this.athleteDataBase.insertAthlete(athlete);

        return athlete;

    };
}