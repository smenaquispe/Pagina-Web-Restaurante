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
exports.ProductController = void 0;
class ProductController {
    constructor(getProduct, addProduct) {
        this.getProduct = getProduct;
        this.addProduct = addProduct;
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const structure = JSON.parse(Object.assign({}, data));
                const product = yield this.getProduct.run(structure);
                res.status(200).send(product);
            }
            catch (error) {
                const messageError = { 'error': error };
                console.log(messageError);
                res.send(messageError);
            }
        });
    }
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const attributes = Object.assign({}, data);
                const response = yield this.addProduct.run(attributes);
                res.status(200).send(response);
            }
            catch (error) {
                const messageError = { 'error': error };
                console.log(messageError);
                res.send(messageError);
            }
        });
    }
}
exports.ProductController = ProductController;
