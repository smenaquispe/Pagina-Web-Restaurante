import { Request, Response } from "express-serve-static-core";
import { GetOrder } from "../application/get.order";
import { MakeOrder } from "../application/make.order";
import { GetUserOrder } from "../application/get.user.order";
import { OrderAttributes } from "../domain/order.interface";

export class OrderController {
    constructor(
        private getOrder : GetOrder,
        private makeOrder : MakeOrder,
        private getUserOrder : GetUserOrder
    ) {}

    async getOrderById (req : Request, res : Response) {
        const {id} = req.body
        const order = await this.getOrder.run(id)
        res.status(200).send(order)
    }

    async makeAnOrder (req : Request, res : Response) {
        const data = req.body
        const attibutes : OrderAttributes = {...data}
        const response = await this.makeOrder.run(attibutes)
        res.status(200).send(response)
    }

    async getOrderFromUser (req : Request, res : Response) {
        const {idUser} = req.body
        const order = await this.getUserOrder.run(idUser)
        res.status(200).send(order)
    }
}