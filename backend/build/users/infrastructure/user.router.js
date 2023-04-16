"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const dependencies_1 = require("./dependencies");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
/**
 * auth if user exists
 */
userRouter.post('/', dependencies_1.userController.authorization.bind(dependencies_1.userController));
userRouter.post('/register', dependencies_1.userController.register.bind(dependencies_1.userController));
