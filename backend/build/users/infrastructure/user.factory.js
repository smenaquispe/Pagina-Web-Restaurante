"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userFactory = exports.User = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
/**
 *
 * here is the function of user factory, implements of db,
 */
function userFactory(sequelize) {
    return sequelize.define('users', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        passwd: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false // for don hae createdAt and updateAt
    });
}
exports.userFactory = userFactory;
