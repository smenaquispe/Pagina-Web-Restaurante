import { OrderAttributes } from "../domain/order.interface";
import { OrderRepository } from "../domain/order.repository";
/**
 * get a order by its id
 */

export class GetOrder{
    constructor(private orderRepository : OrderRepository){}

    async run(orderAttributes : OrderAttributes) {
        const order = await this.orderRepository.get(orderAttributes)
        return order
    }
}