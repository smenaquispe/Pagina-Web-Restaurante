import sequelize from "../../shared/db";
import { GetSerie } from "../application/get.serie";
import { DB } from "./db";
import { SerieController } from "./serie.controller";
import { AddSerie } from "../application/add.serie";

const db = new DB(sequelize)

const getSerie = new GetSerie(db)
const addSerie = new AddSerie(db)

export const serieController = new SerieController(getSerie, addSerie)