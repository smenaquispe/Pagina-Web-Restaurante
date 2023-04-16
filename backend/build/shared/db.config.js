"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig = {
    HOST: '127.0.0.1',
    PORT: 3306,
    USER: 'root',
    PASSWORD: '1234',
    DB: 'webDelivery',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
exports.default = dbConfig;
