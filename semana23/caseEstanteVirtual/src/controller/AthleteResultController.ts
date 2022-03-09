import AthleteResultBusiness from "../business/AthleteResultBusiness";
import { Request, Response } from "express";

export default class AthleteResultController {

    async insertAthleteResult(req: Request, res: Response) {
        try {

           const result = await new AthleteResultBusiness().insertAthleteResult(req.body);

            res.status(201).send({ result })

        } catch (error:any){
            res.status(500).send({ message: error.message });
        };
    };
}