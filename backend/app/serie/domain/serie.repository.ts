import { SerieModel } from "./serie.model";
import { SerieAttributes } from "./serie.interface";

export interface SerieRepository {
    get(serieAtrributes : SerieAttributes) : Promise<SerieModel[]>
    add(serieAtrribute : SerieAttributes) : Promise<SerieModel>
}