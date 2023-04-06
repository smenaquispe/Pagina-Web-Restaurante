import { Router } from "express";
import { orderController } from "./dependecies";

const orderRouter = Router()

orderRouter.post('/', orderController.getOrderByAttributes.bind(orderController))
orderRouter.post('/make', orderController.makeAnOrder.bind(orderController))

export {orderRouter}