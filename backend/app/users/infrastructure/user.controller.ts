import { Request, Response } from "express";
import { AuthUser } from "../application/auth.user";
import { RegisterUser } from "../application/register.user";
import { UserAttributes } from "../domain/user.interface";

export class UserController {

    constructor(private authUser : AuthUser, private registerUser : RegisterUser){}

    async authorization (req : Request, res : Response) {
        const {id} = req.body
        const user = await this.authUser.run(id)
        res.status(200).send(user)
    }

    async register (req : Request, res : Response) {
        const {email, passwd} = req.body
        const attibutes : UserAttributes = {email, passwd}
        const response = await this.registerUser.run(attibutes)
        res.status(200).send(response)
    }
}