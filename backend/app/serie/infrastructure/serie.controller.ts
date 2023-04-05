import { GetSerie } from "../application/get.serie";
import { Request, Response } from "express";

export class SerieController {
    constructor(private getSerie : GetSerie) {}

    async getSerieById(req : Request, res: Response) {
        const { id } = req.body
        const serie = await this.getSerie.run(id)
        res.status(200).send(serie)
    }
}