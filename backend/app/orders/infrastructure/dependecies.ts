import sequelize from "../../shared/db";
import { GetOrder } from "../application/get.order";
import { GetUserOrder } from "../application/get.user.order";
import { MakeOrder } from "../application/make.order";
import { DB } from "./db";
import { OrderController } from "./order.controller";


const db = new DB(sequelize)

const getOrder = new GetOrder(db)
const makeOrder = new MakeOrder(db)
const getUserOrder = new GetUserOrder(db)

export const orderController = new OrderController(getOrder, makeOrder,getUserOrder)