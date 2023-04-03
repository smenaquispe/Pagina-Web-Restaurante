import { Router } from "express";
import { userController } from "./dependencies";

const userRouter = Router()

/**
 * auth if user exists
 */

userRouter.get('/:id', userController.run.bind(userController))

export {userRouter}