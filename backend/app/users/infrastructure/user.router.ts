import { Router } from "express";
import { userController } from "./dependencies";

const userRouter = Router()

/**
 * auth if user exists
 */

userRouter.get('/:id', userController.authorization.bind(userController))
userRouter.post('/register', userController.register.bind(userController))

export {userRouter}