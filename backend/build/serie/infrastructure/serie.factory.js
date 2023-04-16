"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serieFactory = exports.Serie = void 0;
const sequelize_1 = require("sequelize");
class Serie extends sequelize_1.Model {
}
exports.Serie = Serie;
function serieFactory(sequelize) {
    return sequelize.define('serie', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: sequelize_1.DataTypes.DECIMAL,
            allowNull: false
        },
        market: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        tags: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });
}
exports.serieFactory = serieFactory;
