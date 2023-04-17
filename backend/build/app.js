"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const user_router_1 = require("./users/infrastructure/user.router");
const serie_router_1 = require("./serie/infrastructure/serie.router");
const product_router_1 = require("./products/infrastructure/product.router");
const order_router_1 = require("./orders/infrastructure/order.router");
const db_1 = __importDefault(require("./shared/db"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
(0, dotenv_1.config)();
const PORT = process.env.PORT || 3000;
/**
 * db
 */
db_1.default.authenticate()
    .then(() => console.log('conntected to db'))
    .catch(err => console.log('error connecting to db -> ' + err));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/users', user_router_1.userRouter);
app.use('/products', product_router_1.productRouter);
app.use('/serie', serie_router_1.serieRouter);
app.use('/order', order_router_1.orderRouter);
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});
