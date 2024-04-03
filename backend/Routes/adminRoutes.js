import express from "express";
import { adminModel } from "../models/adminModel.js";


const router = express.Router();
router.post('/create', async (request,response)=>{
    try {
        if(
            !request.body.email||
            !request.body.password
        ){
            return response.status(400).send('Send all the required fields');
        }

        const newAdmin = {
            email: request.body.email,
            password: request.body.password
        }

        const newAdminFinal = await adminModel.create(newAdmin);
        return response.status(201).send(newAdminFinal);
    } catch (error) {
        
    }
})



export default router;
