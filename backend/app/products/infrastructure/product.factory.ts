import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import { ProductAttributes } from "../domain/product.interface";

export interface ProductModel extends Model<ProductAttributes>, ProductAttributes {}

export class Product extends Model<ProductModel, ProductAttributes> {}

export type ProductStatic = typeof Product & {
    new (values ? : object, options ? : BuildOptions) : ProductModel
}

export function productFactory(sequelize : Sequelize) : ProductStatic {
    return <ProductStatic>sequelize.define('products', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        }, 
        idSerie: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false
    })
}