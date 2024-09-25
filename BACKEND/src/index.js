const express = require('express');
require('dotenv').config();
const db = require('./models')
const PORT = process.env.PORT


const cors = require('cors')
const IA =require('./routers/IA')
const user= require('./routers/usersRouters')



  
  




class Server {
    constructor () {
        this.app = express();
        this.router();
        this.cors=cors()
        this.sincronizaDatos()
        
       

    }

    
    



    router(){

     this.app
            .use('/',IA)
            .use('/', user)

     
    }



    sincronizaDatos =async()=> {
        try {
            // await db.sequelize.sync({ force: true }); 
            // await db.sequelize.sync({ alter: true });
          console.log('Todas las tablas han sido sincronizadas o creadas.');
      
        } catch (error) {
          console.error('Error al sincronizar la base de datos:', error);
        }
      }


    Listen(){
        this.app.listen(PORT,()=>{
            console.log(`La API escucha en el puerto:http://localhost:${PORT}`)
        })
    }  
}

module.exports = Server