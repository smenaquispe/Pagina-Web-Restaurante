import { OrderRepository } from "../domain/order.repository";
/**
 * get a order by its id
 */

export class GetOrder{
    constructor(private orderRepository : OrderRepository){}

    async run(id : number) {
        const order = await this.orderRepository.getById(id)
        return order
    }
}