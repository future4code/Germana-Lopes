import express from "express";
import AthleteResultController from "../AthleteResultController";

export const athleteRouter = express.Router();
const athleteResultController = new AthleteResultController();

athleteRouter.post("/register", athleteResultController.insertAthleteResult)