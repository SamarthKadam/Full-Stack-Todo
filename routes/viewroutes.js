const express=require('express');
const router=express.Router();
const viewcontroller=require('../controllers/viewController');

router.get('/login',viewcontroller.getLoginForm);


module.exports=router;