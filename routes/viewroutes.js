const express=require('express');
const router=express.Router();
const viewcontroller=require('../controllers/viewController');
const authcontroller=require('../controllers/authController');

router.get('/login',viewcontroller.getLoginForm);
router.get('/home',authcontroller.protect,viewcontroller.getHomePage);
router.get('/signup',viewcontroller.getSignForm);


module.exports=router;