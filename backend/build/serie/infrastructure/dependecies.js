"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serieController = void 0;
const db_1 = __importDefault(require("../../shared/db"));
const get_serie_1 = require("../application/get.serie");
const db_2 = require("./db");
const serie_controller_1 = require("./serie.controller");
const add_serie_1 = require("../application/add.serie");
const db = new db_2.DB(db_1.default);
const getSerie = new get_serie_1.GetSerie(db);
const addSerie = new add_serie_1.AddSerie(db);
exports.serieController = new serie_controller_1.SerieController(getSerie, addSerie);
