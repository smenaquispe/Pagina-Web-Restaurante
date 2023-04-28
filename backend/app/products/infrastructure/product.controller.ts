import { Request, Response } from "express";
import { ProductAttributes } from "../domain/product.interface";
import { AddProduct } from "../application/add.product";
import { GetProduct } from "../application/get.product";
import { AddProductStructure } from "../application/add.product.interface";

export class ProductController {
    constructor(
        private getProduct : GetProduct,
        private addProduct : AddProduct
    ) {}

    async get(req : Request, res : Response) {
        try {
            const data = req.body
            const structure : ProductAttributes = {...data}
            const product = await this.getProduct.run(structure)
            res.status(200).send(product)            
        } catch (error) {
            const messageError = {'error' : error}
            console.log(messageError)
            res.send(messageError)
        }
    }

    async add(req : Request, res : Response) {
        try {
            const data = req.body
            const attributes : AddProductStructure = {...data}
            const response = await this.addProduct.run(attributes)
            res.status(200).send(response)
        } catch (error) {
            const messageError = {'error' : error}
            console.log(messageError)
            res.send(messageError)
        }
    }
}