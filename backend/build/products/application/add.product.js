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
exports.AddProduct = void 0;
class AddProduct {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    add(productAttributes) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.productRepository.add(productAttributes);
            return response;
        });
    }
    run(structure) {
        return __awaiter(this, void 0, void 0, function* () {
            let { idSerie, amount } = structure;
            const response = [];
            while (amount) {
                const attributes = { idSerie };
                const product = yield this.add(attributes);
                response.push(product);
                amount--;
            }
            return response;
        });
    }
}
exports.AddProduct = AddProduct;
