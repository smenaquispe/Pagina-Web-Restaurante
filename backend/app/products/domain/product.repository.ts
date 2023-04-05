import { ProductModel } from "./product.model";
import { ProductAttributes } from "./product.interface";

export interface ProductRepository {
    getById(id : number) : Promise<ProductModel[]>
    getBySerie(idSerie : number) : Promise<ProductModel[]>
    add(productAttributes : ProductAttributes) : Promise<ProductModel>
}