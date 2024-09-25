const express = require("express");
require('dotenv').config();
const path= require('path')


const router = require("./Routers/usuarios_routers");


const PORT =process.env.PORT

class Server {
    

    constructor () {
        
        this.app= express();
        this.Router()
        

        // Middleware para servir archivos estáticos desde la carpeta 'public'
        this.app.use(express.static(path.join(__dirname, 'public')));
   

        
       
            
    }


    Router(){

       this.app.use('/usuarios', router)
    }


   

    Listen(){
        this.app.listen(PORT,()=>{
        console.log(`Puerto que escucha en:http://localhost:${PORT}`)
        })
    }



}


module.exports= Server