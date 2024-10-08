const jwt = require('jsonwebtoken')
require('dotenv').config()

const generatorToken=(uid = '')=>{

    return new Promise((resolve,reject)=>{

        const payload ={uid};

        jwt.sign(payload,process.env.SECRETKEY,{
            expiresIn:'1h'
        },(err,token)=>{


            if(err){
                console.log(err)
                reject('No se pudo generar el token')
            }else{
                resolve(token);
            }
        })
        
    })
}


module.exports=generatorToken