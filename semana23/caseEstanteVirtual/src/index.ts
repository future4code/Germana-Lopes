import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { athleteRouter } from "./controller/routes/AthleteRouter";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/athlete", athleteRouter);
app.use("/result", athleteRouter);

app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003')
 })