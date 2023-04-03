import { UserController } from "./user.controller";
import { AuthUser } from "../application/auth-user";
import { RegisterUser } from "../application/register-user";

const authUser = new AuthUser()
const registerUser = new RegisterUser()

export const userController = new UserController(authUser, registerUser)