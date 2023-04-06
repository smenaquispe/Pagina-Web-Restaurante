import { SerieModel } from "./serie.model";
import { SerieAttributes } from "./serie.interface";

export interface SerieRepository {
    getById(id : number) : Promise<SerieModel[]>
    add(serieAtrribute : SerieAttributes) : Promise<SerieModel>
}