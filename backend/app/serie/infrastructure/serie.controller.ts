import { GetSerie } from "../application/get.serie";
import { Request, Response } from "express";
import { AddSerie } from "../application/add.serie";
import { SerieAttributes } from "../domain/serie.interface";

export class SerieController {
    constructor(
        private getSerie : GetSerie,
        private addSerie : AddSerie
    ) {}

    async getSerieById(req : Request, res: Response) {
        const { id } = req.body
        const serie = await this.getSerie.run(id)
        res.status(200).send(serie)
    }

    async createSerie(req: Request, res: Response) {
        const data = req.body
        const attributes : SerieAttributes = {...data}
        const response = await this.addSerie.run(attributes)
        res.status(200).send(response)
    }
}