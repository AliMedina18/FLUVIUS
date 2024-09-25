
const {response,request} = require('express')
const {users} = require('../models')

const createUsers =async(req= request, res=response)=> {

    const {data} = req.body

   try{
    const create= await users.create(data)

    if(create){
        res.status(200).json({menssage:'Create users'})
    }else{
        res.status(401).json({menssage:'Found users'})
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





module.exports = {
    createUsers,
    getUsers
}