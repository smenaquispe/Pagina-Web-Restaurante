import { GetSerie } from "../application/get.serie";
import { Request, Response } from "express";
import { AddSerie } from "../application/add.serie";
import { SerieAttributes } from "../domain/serie.interface";

export class SerieController {
    constructor(
        private getSerie : GetSerie,
        private addSerie : AddSerie
    ) {}

    async getSerieByAttributes(req : Request, res: Response) {
        try {
            const data = req.body
            const attributes : SerieAttributes = {...data}
            const serie = await this.getSerie.run(attributes)
            res.status(200).send(serie)
        } catch (error) {
            const messageError = JSON.stringify({'error' : error})
            console.log(messageError)
            res.send(messageError)
        }
    }

    async createSerie(req: Request, res: Response) {
        try {
            const data = req.body
            const attributes : SerieAttributes = {...data}
            const response = await this.addSerie.run(attributes)
            res.status(200).send(response)
        } catch (error) {        
            const messageError = JSON.stringify({'error' : error})
            console.log(messageError)
            res.send(messageError)
        }
    }
}