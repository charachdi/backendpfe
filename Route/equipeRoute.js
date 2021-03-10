const express = require('express')
const Router = express.Router()
const db = require("../models");



//get all equipes
Router.get('/', async(req,res)=>{
 const equipe = await db.Equipe.findAll()
 res.send(equipe)


})


//get one equipe by id
Router.get('/:id',async (req,res)=>{


  const equipe = await db.Equipe.findOne({ where: {id : req.params.id}});
  if (!equipe) res.status(201).json({
    message : "equipe not found"
  }) 

  res.status(200).json({
    equipe
  })
})


// add equipe
Router.post('/',async (req,res)=>{


        const {nomService} = req.body
        const {nomEquipe} = req.body
      

      // Create new equipe
      const NewEquipe = {
        Nom_equipe : nomService,
        Service : nomEquipe,
        
         }

       // saving the new user
       try {

      const newequipe =   await  db.Equipe.create(NewEquipe)
      .then((equipe)=>{
        res.status(200).json({
          message : "equipe added",
          equipe,
        })
      })
       } catch (error) {
       console.log(error)
       }
 
  
    
})


//update equipe
Router.put('/update/equipe/:id', async (req,res)=>{


    const {nomService} = req.body
    const {nomEquipe} = req.body
  
    
 

    const equipe = await db.Equipe.findOne({ where : {id : req.params.id}})
    if(!equipe) res.status(201).json({
      message : 'equipe not found'
    })

    equipe.Nom_equipe = nomEquipe
    equipe.Service =  nomService
    


   await equipe.save()
   .then((equipe)=>{
    res.status(200).json({
      message :' equipe updated',
      equipe
    })
   })
  
  })




//delete equipe
Router.delete('/:id', async (req,res)=>{
  const equipe = await db.Equipe.findOne({ where : {id : req.params.id}})
  if(!equipe) res.status(201).json({
    message : 'equipe not found'
  })

  equipe.destroy();
  res.status(200).json({
    message : "equipe deleted",
    equipe
  })
})




module.exports = Router;