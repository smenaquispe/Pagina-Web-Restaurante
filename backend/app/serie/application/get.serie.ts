import { SerieAttributes } from "../domain/serie.interface";
import { SerieRepository } from "../domain/serie.repository";

export class GetSerie {
    constructor(private serieRepository : SerieRepository) {}

    async run(serieAtrributes : SerieAttributes) {
        const serie = await this.serieRepository.get(serieAtrributes)
        return serie
    }
}