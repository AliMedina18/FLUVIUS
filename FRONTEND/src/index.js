const express = require("express");
require('dotenv').config();
const path= require('path')
const cors = require('cors');

const router = require("./Routers/usuarios_routers");


const PORT =process.env.PORT


class Server {
    

    constructor () {
        
        this.app= express();
        this.Router()
       
        const hbs = require('hbs');
        // Midlewares 
        hbs.registerPartials(__dirname + '/views/partials', function (err){});
        this.app.set('view engine', 'hbs');
        this.app.set("views", __dirname + "/views");
        this.app.use(cors());
        this.app.use(express.static("src/public"))
       
            
    }


    Router(){

       this.app.use('/', router)
    }


   

    Listen(){
        this.app.listen(PORT,()=>{
        console.log(`Puerto que escucha en:https://localhost:${PORT}`)
        })
    }



}


module.exports= Server