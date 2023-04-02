import { Router } from "express";

const router = Router()


router.get('/user', (req, res) => {
    res.send(JSON.stringify({'hola' : 'mundo'}))
})


export default router