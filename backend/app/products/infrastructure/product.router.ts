import { Router } from "express";
import { productController } from "./dependecies";

const productRouter = Router()

productRouter.post('/', productController.getById.bind(productController))
productRouter.post('/add', productController.add.bind(productController))
productRouter.post('/series', productController.getBySerie.bind(productController))

export { productRouter }