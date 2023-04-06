import { Request, Response } from "express";
import { AuthUser } from "../application/auth.user";
import { RegisterUser } from "../application/register.user";
import { UserAttributes } from "../domain/user.interface";

export class UserController {

    constructor(private authUser : AuthUser, private registerUser : RegisterUser){}

    async authorization (req : Request, res : Response) {
        try {
            const {email, passwd} = req.body
            const user = await this.authUser.run(email, passwd)
            res.status(200).send(user)
        } catch (error) {            
            const messageError = JSON.stringify({'error' : error})
            console.log(messageError)
            res.send(messageError)
        }
    }

    async register (req : Request, res : Response) {
        try {
            const {email, passwd} = req.body
            const attibutes : UserAttributes = {email, passwd}
            const response = await this.registerUser.run(attibutes)
            res.status(200).send(response)       
        } catch (error) {
            const messageError = JSON.stringify({'error' : error})
            console.log(messageError)
            res.send(messageError)        
        }
    }
}