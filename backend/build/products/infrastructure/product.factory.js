"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productFactory = exports.Product = void 0;
const sequelize_1 = require("sequelize");
class Product extends sequelize_1.Model {
}
exports.Product = Product;
function productFactory(sequelize) {
    return sequelize.define('products', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        idSerie: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false
    });
}
exports.productFactory = productFactory;
