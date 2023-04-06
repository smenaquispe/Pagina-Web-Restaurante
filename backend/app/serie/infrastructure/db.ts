import { Sequelize } from "sequelize";
import { SerieAttributes } from "../domain/serie.interface";
import { SerieModel } from "../domain/serie.model";
import { SerieRepository } from "../domain/serie.repository";
import { serieFactory, SerieStatic } from "./serie.factory";

export class DB implements SerieRepository {
    private serieModel : SerieStatic
    constructor (private sequelize : Sequelize) {
        this.serieModel = serieFactory(sequelize)
    }

    async get(serieAtrributes : SerieAttributes): Promise<SerieModel[]> {
        const serie = await this.serieModel.findAll({where : {...serieAtrributes}})
        return serie
    }

    async add(serieAtrributes : SerieAttributes): Promise<SerieModel> {
        const response = await this.serieModel.create(serieAtrributes)
        return response
    }
}