import { Router } from "express";
import { serieController } from "./dependecies";

const serieRouter = Router()

serieRouter.post('/', serieController.getSerieById.bind(serieController))

export { serieRouter }