const {Router} = require('express');
const { createUsers, getUsers } = require('../controllers/users');
const router=Router();



router.post('/users',createUsers);
router.get('/users',getUsers);



module.exports=router