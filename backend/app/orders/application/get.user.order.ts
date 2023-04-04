import { OrderRepository } from "../domain/order.repository";
/**
 * class get a order but by a userID
 */
export class GetUserOrder {
    constructor(private orderRepository : OrderRepository) {}

    async run(userId : number) {
        const order = this.orderRepository.getByUserId(userId)
        return order
    }
}