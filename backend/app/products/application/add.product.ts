import { ProductRepository } from "../domain/product.repository";
import { ProductAttributes } from "../domain/product.interface";

export class AddProduct {
    constructor(private productRepository : ProductRepository) {}

    async run(productAttributes : ProductAttributes){
        const response = await this.productRepository.add(productAttributes)
        return response
    }
}