import { SerieRepository } from "../domain/serie.repository";
import { SerieAttributes } from "../domain/serie.interface";

export class AddSerie {
    constructor(private serieRepository : SerieRepository) {}

    async run(serieAttributes : SerieAttributes) {
        const serie = await this.serieRepository.add(serieAttributes)
        return serie
    }
}