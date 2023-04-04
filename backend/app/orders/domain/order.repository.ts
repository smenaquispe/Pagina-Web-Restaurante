import { OrderModel } from "./order.model";
import { OrderAttributes } from "./order.interface";

/**
 * here are function I need for order
 */

export interface OrderRepository {
    getById(id : number) : Promise<OrderModel[]>
    make(orderAttributes : OrderAttributes) : Promise<OrderModel>
    getByUserId(userId : number) : Promise<OrderModel[]>
}