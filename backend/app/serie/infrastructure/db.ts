import { Sequelize } from "sequelize";
import sequelize from "../../shared/db";
import { SerieModel } from "../domain/serie.model";
import { SerieRepository } from "../domain/serie.repository";
import { serieFactory, SerieStatic } from "./serie.factory";

export class DB implements SerieRepository {
    private serieModel : SerieStatic
    constructor (private sequelize : Sequelize) {
        this.serieModel = serieFactory(sequelize)
    }

    async getById(id: number): Promise<SerieModel[]> {
        const serie = await this.serieModel.findAll({where : {id}})
        return serie
    }
}