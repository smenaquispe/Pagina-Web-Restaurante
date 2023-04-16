"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderFactory = exports.Order = void 0;
const sequelize_1 = require("sequelize");
class Order extends sequelize_1.Model {
}
exports.Order = Order;
/**
 * here is the factory or orders
 */
function orderFactory(sequalize) {
    return sequalize.define('orders', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        numberOrder: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        idUser: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        idProduct: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        makedAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false
        }
    }, {
        timestamps: false
    });
}
exports.orderFactory = orderFactory;
