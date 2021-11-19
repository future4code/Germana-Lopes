import AthleteBusiness from "../business/AthleteBusiness";
import { Request, Response } from "express";
import { AthleteDTO } from "../model/Athlete";

export default class AthleteController {

    async insertAthlete (req: Request, res:Response){
        try{

            const athleteDTO: AthleteDTO={
                athleteName: req.body.athleteName
            };

            const result = await new AthleteBusiness().insertAthlete(athleteDTO);

            res.status(201).send({ result })

        } catch (error:any){
            res.status(500).send({ message: error.message });
        };
    };
}