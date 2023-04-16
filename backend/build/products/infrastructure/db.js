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
const product_factory_1 = require("./product.factory");
class DB {
    constructor(sequalize) {
        this.sequalize = sequalize;
        this.productModel = (0, product_factory_1.productFactory)(sequalize);
    }
    get(productAttributes) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.productModel.findAll({ where: Object.assign({}, productAttributes) });
            return product;
        });
    }
    add(productAttributes) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.productModel.create(productAttributes);
            return response;
        });
    }
}
exports.DB = DB;
