import express from "express";
import { vehicleModel } from "../models/vehicleModel.js";

const router = express.Router();


router.post('/create', async (request,response)=>{
    
    try {
        console.log("in create route")
        if(
            !request.body.vehiclenumber ||
            !request.body.vehiclename
        ){
            return response.status(400).send('Send all the required fields');
        }

        const newVehicle = {
            vehiclenumber: request.body.vehiclenumber,
            vehiclename: request.body.vehiclename
        }

        const vehicle = await vehicleModel.create(newVehicle);
        return response.status(201).send(vehicle);
    } catch (error) {
        
    }
})


export default router;