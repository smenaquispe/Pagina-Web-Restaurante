import sequelize from "../../shared/db";
import { GetSerie } from "../application/get.serie";
import { DB } from "./db";
import { SerieController } from "./serie.controller";

const db = new DB(sequelize)

const getSerie = new GetSerie(db)

export const serieController = new SerieController(getSerie)