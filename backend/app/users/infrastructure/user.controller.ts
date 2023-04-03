import { Request, Response } from "express";
import { AuthUser } from "../application/auth-user";

export class UserController {

    authUser : AuthUser
    constructor(authUser : AuthUser){
        this.authUser = authUser
    }

    async authorization (req : Request, res : Response) {
        const {id} = req.params
        const user = await this.authUser.run(id)
        res.status(200).send(user)
    }
}