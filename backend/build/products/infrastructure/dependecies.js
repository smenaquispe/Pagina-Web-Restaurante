"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_controller_1 = require("./product.controller");
const add_product_1 = require("../application/add.product");
const get_product_1 = require("../application/get.product");
const db_1 = require("./db");
const db_2 = __importDefault(require("../../shared/db"));
const db = new db_1.DB(db_2.default);
const getProduct = new get_product_1.GetProduct(db);
const addProduct = new add_product_1.AddProduct(db);
exports.productController = new product_controller_1.ProductController(getProduct, addProduct);
