const express= require('express');
const router= express.Router();
const ctrlUserQ=require('../controller/userQController');
const ctrlUser=require('../controller/user.controller');
const ctrlQuest= require('../controller/questionController');
const jwtHelper= require('../config/jwtHelper');

router.post('/register',ctrlUser.register);
router.post('/authenticate',ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken,ctrlUser.userProfile);
router.post('/comment',ctrlUserQ.register);
router.post('/questions',ctrlQuest.register);
router.get('/quize',ctrlQuest.questionAll);

module.exports=router;
