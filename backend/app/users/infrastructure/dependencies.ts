import { UserController } from "./user.controller";
import { AuthUser } from "../application/auth.user";
import { RegisterUser } from "../application/register.user";
import { DB } from "./db";
import sequelize from "../../shared/db";

const db = new DB(sequelize)

const authUser = new AuthUser(db)
const registerUser = new RegisterUser(db)

export const userController = new UserController(authUser, registerUser)