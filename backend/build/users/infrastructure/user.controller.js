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
exports.UserController = void 0;
class UserController {
    constructor(authUser, registerUser) {
        this.authUser = authUser;
        this.registerUser = registerUser;
    }
    authorization(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, passwd } = req.body;
                const user = yield this.authUser.run(email, passwd);
                res.status(200).send(user);
            }
            catch (error) {
                const messageError = JSON.stringify({ 'error': error });
                console.log(messageError);
                res.send(messageError);
            }
        });
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, passwd } = req.body;
                const attibutes = { email, passwd };
                const response = yield this.registerUser.run(attibutes);
                res.status(200).send(response);
            }
            catch (error) {
                const messageError = JSON.stringify({ 'error': error });
                console.log(messageError);
                res.send(messageError);
            }
        });
    }
}
exports.UserController = UserController;
