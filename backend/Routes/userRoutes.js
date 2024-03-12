import express from "express";
import { userModel } from "../models/userModel.js";

const router = express.Router();

router.post('/create', async (request,response)=>{
    try {
        if(
            !request.body.idN ||
            !request.body.password
        ){
            return response.status(400).send('Send all the required fields');
        }

        const newUser ={
            idN: request.body.idN,
            password: request.body.password
        }
        const newUserFinal = await userModel.create(newUser);
        return response.status(201).send(newUserFinal);
    } catch (error) {
        
    }
})


export default router;