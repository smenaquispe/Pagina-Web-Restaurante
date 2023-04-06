import { OrderRepository } from "../domain/order.repository";

/**
 * get a order by its id
 */

export class GetOrder{
    constructor(private orderRepository : OrderRepository){}

    /**
     * return all orders by the number of the order
     */
    async run(numberOrder : number) {
        const orders = await this.orderRepository.doBulletByOrder(numberOrder)
        return orders
    }
}