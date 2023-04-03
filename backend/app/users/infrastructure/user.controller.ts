import { Request, Response } from "express";
import { AuthUser } from "../application/auth-user";
import { RegisterUser } from "../application/register-user";
import { UserAttributes } from "../domain/user";

export class UserController {

    authUser : AuthUser
    registerUser : RegisterUser

    constructor(authUser : AuthUser, registerUser : RegisterUser){
        this.authUser = authUser
        this.registerUser = registerUser
    }

    async authorization (req : Request, res : Response) {
        const {id} = req.params
        const user = await this.authUser.run(id)
        res.status(200).send(user)
    }

    async register (req : Request, res : Response) {

        const {email, passwd} = req.body

        if(!email || !passwd) {
            res.send('error in attributes')
            return
        }

        const attibutes : UserAttributes = {
            email, passwd
        }
               
        const response = await this.registerUser.run(attibutes)
        res.status(200).send(response)
    }
}