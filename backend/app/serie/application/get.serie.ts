import { SerieRepository } from "../domain/serie.repository";

export class GetSerie {
    constructor(private serieRepository : SerieRepository) {}

    async run(id : number) {
        const serie = await this.serieRepository.getById(id)
        return serie
    }
}