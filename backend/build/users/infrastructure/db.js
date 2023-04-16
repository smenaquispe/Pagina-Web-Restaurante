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
const user_factory_1 = require("./user.factory");
/**
 * here is the implemention of what db I wanan use
 */
class DB {
    constructor(sequalize) {
        this.sequalize = sequalize;
        this.userModel = (0, user_factory_1.userFactory)(sequalize);
    }
    get(userAttributes) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, passwd } = userAttributes;
            const user = yield this.userModel.findAll({ where: { email, passwd } });
            return user;
        });
    }
    create(userAttributes) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.userModel.create(userAttributes);
            return response;
        });
    }
}
exports.DB = DB;
