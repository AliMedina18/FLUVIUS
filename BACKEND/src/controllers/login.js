const {response} = require('express')
const {users} = require('../models');
const bcrypt= require('bcryptjs');
const generatorToken = require('../helpers/token');

const login =async (req=require,res=response) => {
    const {email,password} = req.body


    try{

        const User= await users.findOne({ where: { email: email} })


        if(!User){
            return res.status(404).json({message:'User or email went wrong'})
        }


        if(!User.state){
            return res.status(404).json({message:'User or email went wrong, status=false'})
        }

        


        const validPassword = bcrypt.compareSync(password , User.password)
        console.log(User.password,password)

        if(!validPassword){
            return res.status(404).json({message:'Password went wrong'})
        }

        console.log(validPassword)

        

        // if(password===User.password){
            const token= await generatorToken(User.ID_user)
            return res.status(200).json({message:'holi estoy bien',token})
           
        // }
       
      
    }catch(err){
        console.log(err)
        return res.status(500).json({message:'something went wrong'})
    }
 


}

module.exports= login