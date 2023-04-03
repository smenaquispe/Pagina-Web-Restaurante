import { Request, Response } from "express";
import { auth } from "../application/auth-user";

export class UserController {
    async run (req : Request, res : Response) {
        const {id} = req.params
        await auth(id)
        res.status(200).send()
    }
}