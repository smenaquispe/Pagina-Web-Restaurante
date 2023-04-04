import { ProductRepository } from "../domain/product.repository";

export class GetProduct {
    constructor(private productRepository : ProductRepository){}

    async run(id : number){
        const product = await this.productRepository.getById(id)
        return product
    }
}