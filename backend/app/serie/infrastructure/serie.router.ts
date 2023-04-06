import { Router } from "express";
import { serieController } from "./dependecies";

const serieRouter = Router()

serieRouter.post('/', serieController.getSerieByAttributes.bind(serieController))
serieRouter.post('/add', serieController.createSerie.bind(serieController))

export { serieRouter }