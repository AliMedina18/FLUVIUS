
// const express = require('express');
const {request,response} = require('express')
const {users,results} = require('../models')
const bcrypt= require('bcryptjs');


const createUsers = async (req=request, res=response) => {
  
    const{name,email,password,state,ID_roles} = req.body

    console.log(req.body)

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

   try{   
    const response= await users.create({
        name: name,
        email:email,
        password:hashedPassword,
        state:state,
        ID_roles:ID_roles
    })

    if(!response){
       return res.status(401).json({menssage:'Found users'})
    }
       return res.status(200).json({menssage:'Create users',response})

   }catch(err){
        res.status(500).json({message:'Error',err})
   }
    
}


const updateUsers = async (req=request, res=response) => {
  
    const{name,email,password,state,ID_roles} = req.body
    const {id} = req.params
    console.log(req.body)


    const data = {
        name:name,
        email:email,
        password:password,
        state:state,
        ID_roles:ID_roles
    }

   try{   
     const [updated] = await users.update(data, {
        where: { ID_user:id },
    });

    if (updated) {
        const updateUser = await users.findByPk(id);
        return res.status(201).json(updateUser);

    }else{
        return { status: 404, message: 'User not found' };
    }
   }catch(err){
        res.status(500).json({message:'Error',err})
   }
    
}


const getUsers = async(req=request, res=response)=> {

   try{
    const response =await users.findAll()
    
    if(!response){
        return res.status(401).json({menssage:'Found users'})
    }
        return res.status(201).json({menssage:'List users',response})

   }catch(error){
        return res.status(400).json({message:error.message})
        
   }
    
}


const getUsersID = async(req=request, res=response)=> {
    const {id} = req.params
    try{
     const response =await users.findByPk(id)
     
     if(!response){
         return res.status(401).json({menssage:'Found users'})
     }
         return res.status(201).json({menssage:'List users',response})
 
    }catch(error){
         return res.status(400).json({message:error.message})
         
    }
     
 }







module.exports = {
    createUsers,
    getUsers,
    getUsersID,
    updateUsers
}