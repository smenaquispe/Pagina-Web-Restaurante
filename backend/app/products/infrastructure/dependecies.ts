import { ProductController } from "./product.controller";
import { AddProduct } from "../application/add.product";
import { GetProduct } from "../application/get.product";
import { SerieProduct } from "../application/serie.product";
import { DB } from "./db";
import sequelize from "../../shared/db";

const db = new DB(sequelize)

const getProduct = new GetProduct(db)
const addProduct = new AddProduct(db)
const serieProduct = new SerieProduct(db)

export const productController = new ProductController(getProduct, addProduct, serieProduct)