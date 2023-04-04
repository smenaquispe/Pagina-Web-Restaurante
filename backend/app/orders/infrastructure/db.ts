import { Sequelize } from "sequelize";
import { OrderAttributes } from "../domain/order.interface";
import { OrderRepository } from "../domain/order.repository";
import { OrderModel, OrderStatic, orderFactory } from "./order.factory";


/**
 * implementation of db that i wanna use
 */

export class DB implements OrderRepository {

    private orderModel : OrderStatic
    constructor(private sequalize : Sequelize) {
        this.orderModel = orderFactory(sequalize)
    }

    async getById(id: number): Promise<OrderModel[]> {
        const order = await this.orderModel.findAll({where: {id}})       
        return order
    }

    async make(orderAttributes: OrderAttributes): Promise<OrderModel> {
        const response = await this.orderModel.create(orderAttributes)       
        return response
    }

    async getByUserId(idUser: number): Promise<OrderModel[]> {
        const order = await this.orderModel.findAll({where : {idUser}})
        return order
    }
}