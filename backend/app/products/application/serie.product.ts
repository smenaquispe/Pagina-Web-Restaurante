import { ProductRepository } from "../domain/product.repository";

export class SerieProduct {
    constructor(private productRepository : ProductRepository){}

    async run(serie : number) {
        const product = await this.productRepository.getBySerie(serie)
        return product
    }
}