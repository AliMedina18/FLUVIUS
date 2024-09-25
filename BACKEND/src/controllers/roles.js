
// const express = require('express');
const {request,response} = require('express')
const {roles} = require('../models')
const bcrypt= require('bcryptjs');

const express = require('express');


const createRol = async (req=request, res=response) => {
  
    const{descripcion} = req.body

    console.log(req.body)

   try{   
    const response= await roles.create({
       descripcion:descripcion
    })

    if(!response){
       return res.status(401).json({menssage:'Found rol'})
    }
       return res.status(200).json({menssage:'Create rol',response})

   }catch(err){
        res.status(500).json({message:'Error',err})
   }
    
}


const updateRoles = async (req=request, res=response) => {
  
    const{descripcion} = req.body
    const {id} = req.params
    console.log(req.body)


    const data = {
        descripcion:descripcion
    }

   try{   
     const [updated] = await roles.update(data, {
        where: { ID_rol:id },
    });

    if (updated) {
        const updateRol = await roles.findByPk(id);
        return res.status(201).json(updateRol);

    }else{
        return { status: 404, message: 'Rol not found' };
    }
   }catch(err){
        res.status(500).json({message:'Error',err})
   }
    
}


const getRoles = async(req=request, res=response)=> {

   try{
    const response =await roles.findAll()
    
    if(!response){
        return res.status(401).json({menssage:'Found roles'})
    }
        return res.status(201).json({menssage:'List roles',response})

   }catch(error){
        return res.status(400).json({message:error.message})
        
   }
    
}


const getRolesID = async(req=request, res=response)=> {
    const {id} = req.params
    try{
     const response =await roles.findByPk(id)
     
     if(!response){
         return res.status(401).json({menssage:'Found roles'})
     }
         return res.status(201).json({menssage:'List roles',response})
 
    }catch(error){
         return res.status(400).json({message:error.message})
         
    }
     
 }

 const Delete = async (req=require, res=response) => {

    const {id} = req.params

    const deleted = await roles.destroy({ where: {ID_rol: id}, });
    if (deleted) {
    return  res.status(200).json({messege:'deleted rol', deleted} ) ;
}else{
    return {status: 404, message: 'Rol not found' };
}

}








module.exports = {
    createRol,
    updateRoles,
    getRoles,
    getRolesID,
    Delete
}