import { ProductRepository } from "../domain/product.repository";
import { ProductAttributes } from "../domain/product.interface";
import { AddProductStructure } from "./add.product.interface";
import { ProductModel } from "../domain/product.model";

export class AddProduct {
    constructor(private productRepository : ProductRepository) {}

    private async add(productAttributes : ProductAttributes){
        const response = await this.productRepository.add(productAttributes)
        return response
    }

    async run(structure : AddProductStructure){
        let { idSerie, amount } = structure
        const response : ProductModel[] = []

        while(amount) {
            const attributes : ProductAttributes = {idSerie}
            const product = await this.add(attributes)
            response.push(product)
            amount--
        }

        return response
    }
}