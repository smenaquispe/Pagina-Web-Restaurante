import { ProductRepository } from "../domain/product.repository";

export class SerieProduct {
    constructor(private productRepository : ProductRepository){}

    async run(idSerie : number) {
        const product = await this.productRepository.getBySerie(idSerie)
        return product
    }
}