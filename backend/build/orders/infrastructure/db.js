"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const order_factory_1 = require("./order.factory");
/**
 * implementation of db that i wanna use
 */
class DB {
    constructor(sequalize) {
        this.sequalize = sequalize;
        this.orderModel = (0, order_factory_1.orderFactory)(sequalize);
    }
    get(orderAttributes) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield this.orderModel.findAll({ where: Object.assign({}, orderAttributes) });
            return order;
        });
    }
    make(orderAttributes) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.orderModel.create(orderAttributes);
            return response;
        });
    }
    doBulletByOrder(numberOrder) {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield this.get({ numberOrder });
            const { idUser, makedAt } = orders[0];
            const idProducts = [];
            orders.forEach(order => idProducts.push(order.idProduct || 0));
            const structure = { idUser, idProducts, makedAt };
            return structure;
        });
    }
}
exports.DB = DB;
