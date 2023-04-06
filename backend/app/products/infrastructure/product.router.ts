import { Router } from "express";
import { productController } from "./dependecies";

const productRouter = Router()

productRouter.post('/', productController.get.bind(productController))
productRouter.post('/add', productController.add.bind(productController))

export { productRouter }