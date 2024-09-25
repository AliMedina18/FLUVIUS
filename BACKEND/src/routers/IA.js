const {Router, response} = require('express');
const chatWithGPT = require('../controllers/IA');
// const chatGPT = require('../controllers/IA');
// const chatWithGPT = require('../controllers/IA');

const router=Router();

router.post('/', chatWithGPT);
  


module.exports=router