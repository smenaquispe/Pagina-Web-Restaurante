import { ProductModel } from "./product.model";
import { ProductAttributes } from "./product.interface";

export interface ProductRepository {
    getById(id : number) : Promise<ProductModel[]>
    getBySerie(serie : number) : Promise<ProductModel[]>
    add(productAttributes : ProductAttributes) : Promise<ProductModel>
}