const {Router} = require('express');
const controllers = require('../controllers/users');

const router=Router();

router
    .get('/',controllers.getUsers)
    .get('/:id', controllers.getUsersID)
    .post('/', controllers.createUsers)
    .patch('/:id', controllers.updateUsers)
    

module.exports=router