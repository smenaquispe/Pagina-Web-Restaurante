import { Sequelize } from "sequelize";
import { GetOrderStructure } from "../domain/get.order.interface";
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

    async get(orderAttributes : OrderAttributes): Promise<OrderModel[]> {
        const order = await this.orderModel.findAll({where: {...orderAttributes}})       
        return order
    }

    async make(orderAttributes: OrderAttributes): Promise<OrderModel> {
        const response = await this.orderModel.create(orderAttributes)
        return response
    }

    async doBulletByOrder(numberOrder: number): Promise<GetOrderStructure> {
        const orders = await this.get({numberOrder}) 
        const {idUser, makedAt} = orders[0]
        const idProducts : number[] = []
        orders.forEach(order => idProducts.push(order.idProduct|| 0))
        const structure : GetOrderStructure =  {idUser, idProducts, makedAt}
        return structure
    }
}