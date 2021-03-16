const express = require('express')
const Router = express.Router()
const db = require("../models");



//get all clients
Router.get('/', async(req,res)=>{
 const clients = await db.Clients.findAll()
 res.send(clients)


})


//get one client by id
Router.get('/:id',async (req,res)=>{


  const client = await db.Clients.findOne({ where: {id : req.params.id}});
  if (!client) res.status(201).json({
    message : "client not found"
  }) 

  res.status(200).json({
    client
  })
})


// add client
Router.post('/',async (req,res)=>{

        const {nomClient} = req.body
    
      // Create new equipe
      const NewCLient = {
        Nom_client : nomClient,
        
         }

       // saving the new user
       try {

     await  db.Clients.create(NewCLient)
      .then((client)=>{
        res.status(200).json({
          message : "client added",
          client,
        })
      })
       } catch (error) {
       console.log(error)
       }
 
  
    
})


//update equipe
Router.put('/update/clients/:id', async (req,res)=>{


    const {nomClient} = req.body
    
  
    
 

    const client = await db.Clients.findOne({ where : {id : req.params.id}})
    if(!client) res.status(201).json({
      message : 'client not found'
    })

    client.Nom_client = nomClient
   
    


   await client.save()
   .then((client)=>{
    res.status(200).json({
      message :' client updated',
      client
    })
   })
  
  })




//delete equipe
Router.delete('/:id', async (req,res)=>{
  const client = await db.Clients.findOne({ where : {id : req.params.id}})
  if(!client) res.status(201).json({
    message : 'client not found'
  })

  client.destroy();
  res.status(200).json({
    message : "client deleted",
    client
  })
})




module.exports = Router;