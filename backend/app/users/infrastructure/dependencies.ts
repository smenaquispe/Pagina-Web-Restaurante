import { UserController } from "./user.controller";
import { AuthUser } from "../application/auth-user";

const authUser = new AuthUser()
export const userController = new UserController(authUser)