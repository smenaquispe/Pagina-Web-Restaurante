import sequelize from "../../shared/db";
import { GetOrder } from "../application/get.order";
import { MakeOrder } from "../application/make.order";
import { DB } from "./db";
import { OrderController } from "./order.controller";


const db = new DB(sequelize)

const getOrder = new GetOrder(db)
const makeOrder = new MakeOrder(db)

export const orderController = new OrderController(getOrder, makeOrder)