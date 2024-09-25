const {Router} = require('express');
const controllers = require('../controllers/challenges');
const router=Router();

router
    .get('/',controllers.getChallenges)
    .get('/:id',controllers.getChallengeID)
    .post('/',controllers.createChallenges)
   

module.exports=router