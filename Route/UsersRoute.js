const express = require('express')
const Router = express.Router()
const db = require("../models");
const bycrpt = require("bcryptjs");
const Jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid');


//get all users
Router.get('/', async(req,res)=>{
 const users = await db.User.findAll()
 res.send(users)


})


//get one user by email
Router.get('/:email',async (req,res)=>{


  const user = await db.User.findOne({ where: {user_email : req.params.email}});
  if (!user) res.status(201).json({
    message : "user not found"
  }) 

  res.status(200).json({
    user
  })
})


// add user
Router.post('/',async (req,res)=>{


        const {email} = req.body
        const {pwd} = req.body
        const {level} = req.body

      //check if user exists
      const emailexist = await db.User.findOne({ where: {user_email : email}});
      if (emailexist) return res.status(201).json({
        message : "Email exists try another one"
      })


      //Hash password
    const salt = await bycrpt.genSalt(10);
    const hashpassword = await bycrpt.hash(pwd,salt);

      // Create new user
      const NewUser = {
         user_email : email,
         pwd : hashpassword,
         user_level:level,
         activation_code : uuidv4()
         }

       // saving the new user
       try {

      const newuser =   await  db.User.create(NewUser)
      .then((user)=>{
        res.status(200).json({
          message : "user added",
          user,
        })
      })
       } catch (error) {
       console.log(error)
       }
 
  
    
})


//update user
Router.put('update/profile/:id', async (req,res)=>{


    const { full_name } = req.body
    const { user_name } = req.body
    const { user_sex } = req.body
    const { address } = req.body
    const { country } = req.body
    const { tel } = req.body
    const { fax } = req.body
    const { Website } = req.body
 

    const user = await db.User.findOne({ where : {user_email : email}})
    if(!user) res.status(201).json({
      message : 'user not found'
    })

    user.full_name = full_name
    user.user_name = user_name
    user.user_sex = user_sex
    user.address = address
    user.country = country
    user.tel = tel
    user.fax = fax
    user.Website = Website


   await user.save()
   .then((user)=>{
    res.status(200).json({
      message :' user updated',
      user
    })
   })
  
  })

//update level
Router.put('/level/:id', async (req,res)=>{

  const {role} = req.body
  const user = await db.User.findOne({ where : {user_email : email}})
  if(!user) res.status(201).json({
    message : 'user not found'
  })

  user.user_level = role;
  await user.save()
  res.status(200).json({
    message : "role updated",
    user
  })
})


//update auth
Router.put('/auth/:id', async (req,res)=>{

  const {role} = req.body
  const user = await db.User.findOne({ where : {user_email : email}})
  if(!user) res.status(201).json({
    message : 'user not found'
  })

  user.user_level = role;
  await user.save()
  res.status(200).json({
    message : "role updated",
    user
  })
})


//delete user
Router.delete('/user/:id', async (req,res)=>{
  const user = await db.User.findOne({ where : {user_email : email}})
  if(!user) res.status(201).json({
    message : 'user not found'
  })

  user.destroy();
  res.status(200).json({
    message : "user deleted",
    user
  })
})




module.exports = Router;