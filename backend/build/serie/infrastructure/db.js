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
const serie_factory_1 = require("./serie.factory");
class DB {
    constructor(sequelize) {
        this.sequelize = sequelize;
        this.serieModel = (0, serie_factory_1.serieFactory)(sequelize);
    }
    get(serieAtrributes) {
        return __awaiter(this, void 0, void 0, function* () {
            const serie = yield this.serieModel.findAll({ where: Object.assign({}, serieAtrributes) });
            return serie;
        });
    }
    add(serieAtrributes) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.serieModel.create(serieAtrributes);
            return response;
        });
    }
}
exports.DB = DB;
