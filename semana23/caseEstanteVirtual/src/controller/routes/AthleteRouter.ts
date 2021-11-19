import express from "express";
import AthleteController from "../AthleteController";

export const athleteRouter = express.Router();
const athleteController = new AthleteController();

athleteRouter.post("/register", athleteController.insertAthlete)