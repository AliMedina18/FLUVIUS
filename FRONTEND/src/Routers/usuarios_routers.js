const { Router } = require("express");
const {response, request} = require('express')
const path= require('path')

const router = Router()



router.get('/', (req, res=response)=>{ 
    res.render('login', { title: 'Mi Título' });

})


router.get('/form', (req, res=response)=>{ 
    res.render('form', { title: 'Mi Título' });

})


module.exports=router