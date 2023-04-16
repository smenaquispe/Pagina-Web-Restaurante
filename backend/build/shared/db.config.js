"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig = {
    HOST: 'containers-us-west-142.railway.app',
    PORT: 6430,
    USER: 'root',
    PASSWORD: 'yte8rqb61vpMeZovEpiQ',
    DB: 'railway',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
exports.default = dbConfig;
