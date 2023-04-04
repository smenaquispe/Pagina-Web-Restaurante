import { Router } from "express";
import { orderController } from "./dependecies";

const orderRouter = Router()

orderRouter.post('/', orderController.getOrderById.bind(orderController))
orderRouter.post('/make', orderController.makeAnOrder.bind(orderController))
orderRouter.post('/user', orderController.getOrderFromUser.bind(orderController))

export {orderRouter}