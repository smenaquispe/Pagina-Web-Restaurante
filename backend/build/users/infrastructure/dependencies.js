"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_controller_1 = require("./user.controller");
const auth_user_1 = require("../application/auth.user");
const register_user_1 = require("../application/register.user");
const db_1 = require("./db");
const db_2 = __importDefault(require("../../shared/db"));
const db = new db_1.DB(db_2.default);
const authUser = new auth_user_1.AuthUser(db);
const registerUser = new register_user_1.RegisterUser(db);
exports.userController = new user_controller_1.UserController(authUser, registerUser);
