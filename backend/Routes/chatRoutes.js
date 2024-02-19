import express from "express";
import { chatModel } from "../models/chatModel.js";
import { replyModel } from "../models/replyModel.js";

const router = express.Router();

router.post('/create', async (request,response)=>{
    try {
        if(
            !request.body.title ||
            !request.body.vehicle ||
            !request.body.issue 
        ){
            return response.status(400).send('Send all the required fields');
        }

        const newChat = {
            title: request.body.title,
            vehicle: request.body.vehicle,
            issue: request.body.issue
        }

        const chat = await chatModel.create(newChat);
        return response.status(201).send(chat);
    } catch (error) {
        
    }
})


router.get('/chats', async (request,response)=>{
    try {
        const all = await chatModel.find({});
        return response.status(200).json(all);
        
    } catch (error) {
        
    }
})

router.delete('/delete/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await chatModel.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'Chat not found' })
        }
        return response.status(200).send({ message: 'Chat deleted successfully' });
        
    } catch (error) {
        
    }
})

router.get('/getchat/:id', async (request, response) => {

    try {
        const { id } = request.params;
        const as= await chatModel.findById(id);
        return response.status(200).json(as);

    } catch (error) {
        
    }
})



router.put('/edit/:id', async (request, response) => {

    try {
        if (
            !request.body.title ||
            !request.body.vehicle ||
            !request.body.issue
        ) {
            return response.status(400).send({
                message: 'Send all the required fields FOR THE UPDATING'
            })
        }
         const { id } = request.params;
        const result = await chatModel.findByIdAndUpdate(id, request.body)
        if (!result) {
            return response.status(404).json({
                message: 'Chat not found'
            })
        }
        return response.status(200).send({
            message: 'Chat updated successfully'
        })


    } catch (error) {
        
    }
})


router.post('/create/admin/', async (request,response)=>{
    try {

        const newChat = {
            title: request.body.title,
            issueid: request.body.issueid
        }

        const chat = await replyModel.create(newChat);
        return response.status(201).send(chat);
    } catch (error) {
        
    }
})

router.get('/getchat/:id/reply', async (request, response) => {
 
    try {
        
        //
        const {id} = request.params;

        //findAll part comes here.(see bottom for it)
        ////////////////////////////

        
        const forrid2 = []

        ////taking the _id of the replies that has {issueid: id}, into an array

        const rids = [];


        for(i in forrid2){
            var rid = i._id
            rids.push(rid)
        }
        
        
        
        
        var rid = "65d35a1a30d7e9424582e9a6"
        var rid2 = "65c9eb55c7c7159970ff2842"
        var rid3 = "65d3742eb66c95f04b2cf1c3"

        rids.push(rid)
        rids.push(rid2)
        rids.push(rid3)

         
        
        const as2 = []
        
        let size = rids.length

        for(let k=0; k<size; k++){
        const as = await replyModel.findById(rids[k])
            as2.push(as)
        
        }

        

    // const users = await replyModel.findAll({
    //     where: {
    //       issueid: id,
    //     },
    //   });

    //   console.log(users)

        return response.status(200).json(as2);

    } catch (error) {
     
    }
})


export default router;