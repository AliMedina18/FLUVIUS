const {Router, response} = require('express');
const login = require('../controllers/login');
const {check} = require('express-validator')

const router=Router();

router.post('/',[
    // check('email','e-mail is mandatory').isEmail()
], login);
  


module.exports= router