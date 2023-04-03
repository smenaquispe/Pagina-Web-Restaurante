import { Request, Response } from "express";
import { AuthUser } from "../application/auth-user";

export class UserController {

    authUser
    constructor(authUser : AuthUser){
        this.authUser = authUser
    }

    async run (req : Request, res : Response) {
        const {id} = req.params
        await this.authUser.run(id)
        res.status(200).send(`id of user ${id}`)
    }
}