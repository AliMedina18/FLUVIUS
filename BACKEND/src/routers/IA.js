const {Router, response} = require('express');
const chatWithGPT = require('../controllers/IA');
// const verifyToken = require('../helpers/verifytoken')
const router=Router();

router.post('/',chatWithGPT);
  


module.exports=router