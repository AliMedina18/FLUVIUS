const { Router } = require("express");
const {response, request} = require('express')

const router = Router()



router.get('/', (req, res=response)=>{
res.send('HOLA MUCHACHOS SOY SU SERVIDOR :)')
})


module.exports=router