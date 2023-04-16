"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serieRouter = void 0;
const express_1 = require("express");
const dependecies_1 = require("./dependecies");
const serieRouter = (0, express_1.Router)();
exports.serieRouter = serieRouter;
serieRouter.post('/', dependecies_1.serieController.getSerieByAttributes.bind(dependecies_1.serieController));
serieRouter.post('/add', dependecies_1.serieController.createSerie.bind(dependecies_1.serieController));
