import { Request, Response, Router } from "express";
import fs from "fs"
import { compile } from "morgan";

type TUser ={
    name: string;
    email: string;
}

let users: TUser[]= [];

const router: Router = Router()

router.get('/hello', (req : Request,res : Response)=>{
    res.json({ msg: "Hello world!" });
})


router.get('/echo/:id', (req : Request,res : Response)=>{
    console.log(req)
    res.json({ id: req.params.id });
})

router.post('/sum', (req : Request,res : Response)=>{
    let sum: number = 0
    const {numbers} = req.body;
    console.log(numbers)
    
    numbers.forEach((num: number) => {
        sum += num
    });
    res.json({sum : sum})

})

router.post('/users', (req : Request,res : Response)=>{
    
    console.log(req.body)
    users.push(req.body)
    console.log(users)
    res.json({message: "User successfully added"})
})


router.get('/users', (req : Request,res : Response)=>{
    res.json(users)
})

export default router