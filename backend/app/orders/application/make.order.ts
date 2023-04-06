import { OrderRepository } from "../domain/order.repository";
import { OrderAttributes } from "../domain/order.interface";
import { MakeOrderStructure } from "./make.order.interface";
import { OrderModel } from "../domain/order.model";

/**
 * class make a order
 */

export class MakeOrder {
    constructor(private orderRepository : OrderRepository) {}

    private async create(orderAttributes : OrderAttributes) {
        const response = await this.orderRepository.make(orderAttributes)
        return response
    }
    
    async run(makeOrderStructure : MakeOrderStructure){
        const response : OrderModel[] = []
        const { idProducts } = makeOrderStructure
        
        await idProducts.forEach(async (product) => {
            const attibutes : OrderAttributes = {
                numberOrder: makeOrderStructure.numberOrder,
                idUser: makeOrderStructure.idUser,
                idProduct: product,
                makedAt: makeOrderStructure.makedAt
            }
            
            response.push(await this.create(attibutes))
        })
        
        return JSON.stringify({
            'message' : 'Order register',
            'orders' : response
        })
    }
}