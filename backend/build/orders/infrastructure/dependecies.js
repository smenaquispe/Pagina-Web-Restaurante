"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const db_1 = __importDefault(require("../../shared/db"));
const get_order_1 = require("../application/get.order");
const make_order_1 = require("../application/make.order");
const db_2 = require("./db");
const order_controller_1 = require("./order.controller");
const db = new db_2.DB(db_1.default);
const getOrder = new get_order_1.GetOrder(db);
const makeOrder = new make_order_1.MakeOrder(db);
exports.orderController = new order_controller_1.OrderController(getOrder, makeOrder);
