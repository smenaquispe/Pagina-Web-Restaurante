import { Request, Response } from "express-serve-static-core";
import { GetOrder } from "../application/get.order";
import { MakeOrder } from "../application/make.order";
import { OrderAttributes } from "../domain/order.interface";
import { MakeOrderStructure } from "../application/make.order.interface";

export class OrderController {
    constructor(
        private getOrder : GetOrder,
        private makeOrder : MakeOrder
    ) {}

    async getOrderByAttributes (req : Request, res : Response) {
        try {
            const data = req.body
            const attibutes : OrderAttributes = {...data}
            const order = await this.getOrder.run(attibutes)
            res.status(200).send(order)
        } catch (error) {
            const messageError = JSON.stringify({'error' : error})
            console.log(messageError)
            res.send(messageError)
        }
    }

    async makeAnOrder (req : Request, res : Response) {
        try {
            const data = req.body
            const structure : MakeOrderStructure = {...data}
            const response = await this.makeOrder.run(structure)
            res.status(200).send(response)
        } catch (error) {
            const messageError = {'error' : error}
            console.log(messageError)
            res.send(messageError)
        }
    }
}