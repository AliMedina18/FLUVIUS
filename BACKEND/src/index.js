const express = require('express');
require('dotenv').config();
const db = require('./models')
const PORT = process.env.PORT


const cors = require('cors')
const IA =require('./routers/IA')
const user= require('./routers/usersRouters')
const challenges = require('./routers/challengesRouters')
const body = require('body-parser'); // Corregir nombre
const login= require('./routers/login')



class Server {
    constructor () {
        this.app = express();
      
        this.app.use(express.json());
        // this.app.use(body.urlencoded({ extended: true}));
        this.app.use(cors())
        this.sincronizaDatos()


        this.router();
 
    this.app.use(express.urlencoded({ extended: true }));
   
    this.app.use(cors({
      origin: 'http://localhost:3300',
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }));
        
      
    }

    t

  

    router(){
     this.app
            .use('/IA',IA)
            .use('/users', user)   
            .use('/challenges', challenges)   
            .use('/login', login) 
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
            console.log(`La API escucha en el puerto:https://localhost:${PORT}`)
        })
    }  
}

module.exports = Server