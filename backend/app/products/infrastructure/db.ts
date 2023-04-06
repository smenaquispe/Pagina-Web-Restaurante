import { Sequelize } from "sequelize";
import { ProductAttributes } from "../domain/product.interface";
import { ProductModel } from "../domain/product.model";
import { ProductRepository } from "../domain/product.repository";
import { productFactory, ProductStatic } from "./product.factory";

export class DB implements ProductRepository {
    
    private productModel : ProductStatic
    constructor(private sequalize : Sequelize){
        this.productModel = productFactory(sequalize)
    }

    async get(productAttributes: ProductAttributes): Promise<ProductModel[]> {
        const product = await this.productModel.findAll({where : {...productAttributes}})        
        return product
    }
    
    async add(productAttributes: ProductAttributes): Promise<ProductModel> {
        const response = await this.productModel.create(productAttributes)
        return response
    }
}