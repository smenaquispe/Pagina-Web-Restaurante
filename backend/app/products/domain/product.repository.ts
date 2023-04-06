import { ProductModel } from "./product.model";
import { ProductAttributes } from "./product.interface";

export interface ProductRepository {
    get(productAttributes : ProductAttributes) : Promise<ProductModel[]>
    add(productAttributes : ProductAttributes) : Promise<ProductModel>
}