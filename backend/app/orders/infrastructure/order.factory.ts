import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import { OrderAttributes } from "../domain/order.interface";


export interface OrderModel extends Model<OrderAttributes>, OrderAttributes {}

export class Order extends Model<OrderModel, OrderAttributes> {}

export type OrderStatic = typeof Order & {
    new (values ? : object, options ? : BuildOptions) : OrderModel
}

/**
 * here is the factory or orders
 */

export function orderFactory(sequalize : Sequelize) : OrderStatic {
    return <OrderStatic>sequalize.define('orders', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        numberOrder: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idProduct: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        makedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        timestamps: false
    })   
}