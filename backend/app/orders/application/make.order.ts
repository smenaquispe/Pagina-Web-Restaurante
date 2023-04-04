import { OrderRepository } from "../domain/order.repository";
import { OrderAttributes } from "../domain/order.interface";

/**
 * class make a order
 */

export class MakeOrder {
    constructor(private orderRepository : OrderRepository) {}

    async run(orderAttributes : OrderAttributes){
        const response = await this.orderRepository.make(orderAttributes)
        return response
    }
}