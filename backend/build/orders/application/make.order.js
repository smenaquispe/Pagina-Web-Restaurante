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
exports.MakeOrder = void 0;
/**
 * class make a order
 */
class MakeOrder {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    create(orderAttributes) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.orderRepository.make(orderAttributes);
            return response;
        });
    }
    run(makeOrderStructure) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = [];
            const { idProducts } = makeOrderStructure;
            for (const id of idProducts) {
                const attibutes = {
                    numberOrder: makeOrderStructure.numberOrder,
                    idUser: makeOrderStructure.idUser,
                    idProduct: id,
                    makedAt: makeOrderStructure.makedAt
                };
                response.push(yield this.create(attibutes));
            }
            return response;
        });
    }
}
exports.MakeOrder = MakeOrder;
