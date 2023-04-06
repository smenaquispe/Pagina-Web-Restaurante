import { OrderModel } from "./order.model";
import { OrderAttributes } from "./order.interface";

/**
 * here are function I need for order
 */

export interface OrderRepository {
    get(orderAttributes : OrderAttributes) : Promise<OrderModel[]>
    make(orderAttributes : OrderAttributes) : Promise<OrderModel>
}