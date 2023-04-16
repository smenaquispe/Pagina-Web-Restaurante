"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const dependecies_1 = require("./dependecies");
const orderRouter = (0, express_1.Router)();
exports.orderRouter = orderRouter;
orderRouter.post('/', dependecies_1.orderController.getOrderByAttributes.bind(dependecies_1.orderController));
orderRouter.post('/make', dependecies_1.orderController.makeAnOrder.bind(dependecies_1.orderController));
