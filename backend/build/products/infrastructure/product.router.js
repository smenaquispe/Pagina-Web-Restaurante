"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const dependecies_1 = require("./dependecies");
const productRouter = (0, express_1.Router)();
exports.productRouter = productRouter;
productRouter.post('/', dependecies_1.productController.get.bind(dependecies_1.productController));
productRouter.post('/add', dependecies_1.productController.add.bind(dependecies_1.productController));
