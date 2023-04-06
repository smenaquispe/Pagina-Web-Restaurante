import { Request, Response } from "express";
import { ProductAttributes } from "../domain/product.interface";
import { AddProduct } from "../application/add.product";
import { GetProduct } from "../application/get.product";

export class ProductController {
    constructor(
        private getProduct : GetProduct,
        private addProduct : AddProduct
    ) {}

    async get(req : Request, res : Response) {
        const data = req.body
        const attributes : ProductAttributes = {...data}
        const product = await this.getProduct.run(attributes)
        res.status(200).send(product)
    }

    async add(req : Request, res : Response) {
        const data = req.body
        const attributes : ProductAttributes = {...data}
        const response = await this.addProduct.run(attributes)
        res.status(200).send(response)
    }

}