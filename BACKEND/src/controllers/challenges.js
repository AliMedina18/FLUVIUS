
// const express = require('express');
const {request,response} = require('express')
const {challenges,results,results_challenges} = require('../models')

const express = require('express');


const createChallenges = async (req=request, res=response) => {
  
    const{description,end_date} = req.body

    console.log(req.body)

   try{   
    const response= await challenges.create({
        description: description,
        start_date:new Date(),
        end_date: end_date
    })

    if(!response){
       return res.status(401).json({menssage:'Found challenges'})
    }
       return res.status(200).json({menssage:'Create challenges',response})

   }catch(err){
        res.status(500).json({message:'Error',err})
   }
    
}


const updateChallenge = async (req=request, res=response) => {
  
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
        return { status: 404, message: 'Usert not found' };
    }
   }catch(err){
        res.status(500).json({message:'Error',err})
   }
    
}


const getChallenges= async(req=request, res=response)=> {

   try{
    const response =await challenges.findAll({
        include:[
            {
                model: results,
                as: 'results',
                through: {
                  model: results_challenges,  // Tabla intermedia entre Pedidos y Productos
                  attributes: ['ID_challenges', 'ID_results', 'litros'],
                }}
        ]
    })
    
    if(!response){
        return res.status(401).json({menssage:'Found challenges'})
    }
        return res.status(201).json({menssage:'List chanllenges',response})

   }catch(error){
        return res.status(400).json({message:error.message})
        
   }
    
}


const getChallengeID = async(req=request, res=response)=> {
    const {id} = req.params
    try{
     const response =await challenges.findByPk(id)
     
     if(!response){
         return res.status(401).json({menssage:'Found challenge'})
     }
         return res.status(201).json({menssage:'List challenge',response})
 
    }catch(error){
         return res.status(400).json({message:error.message})
         
    }
     
 }







module.exports = {
    getChallenges,
    createChallenges,
    getChallengeID,
    updateChallenge
}