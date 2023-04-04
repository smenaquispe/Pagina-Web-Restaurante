import { Request, Response } from "express";
import { ProductAttributes } from "../domain/product.interface";
import { AddProduct } from "../application/add.product";
import { GetProduct } from "../application/get.product";
import { SerieProduct } from "../application/serie.product";

export class ProductController {
    constructor(
        private getProduct : GetProduct,
        private addProduct : AddProduct,
        private serieProduct : SerieProduct
    ) {}

    async getById(req : Request, res : Response) {
        const { id } = req.body
        const product = await this.getProduct.run(id)
        res.status(200).send(product)
    }

    async add(req : Request, res : Response) {
        const data = req.body
        const attributes : ProductAttributes = {...data}
        const response = await this.addProduct.run(attributes)
        res.status(200).send(response)
    }

    async getBySerie(req : Request, res : Response) {
        const { serie } = req.body
        const product = await this.serieProduct.run(serie)
        res.status(200).send(product)
    }
}