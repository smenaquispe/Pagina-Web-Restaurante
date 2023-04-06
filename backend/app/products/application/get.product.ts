import { ProductRepository } from "../domain/product.repository";
import { ProductAttributes } from "../domain/product.interface";

export class GetProduct {
    constructor(private productRepository : ProductRepository){}

    async run(productAttributes : ProductAttributes){
        const product = await this.productRepository.get(productAttributes)
        return product
    }
}