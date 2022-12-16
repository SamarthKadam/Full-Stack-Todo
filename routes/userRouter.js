const express=require('express');
const authcontroller=require('../controllers/authController');
const usercontroller=require('../controllers/userController');

const router=express.Router();

router.post('/signup',authcontroller.signup);
router.post('/login',authcontroller.login);
router.patch('/updateMyPassword',authcontroller.protect,authcontroller.updateMyPassword);
router.patch('/updateMe',authcontroller.protect,authcontroller.updateData);
router.delete('/deleteMe',authcontroller.protect,authcontroller.deleteMe);

router.get('/getAllUsers',usercontroller.getAllUsers);
router.get('/getMe',authcontroller.protect,usercontroller.getMe);
// router.patch('/updateTodoWithUser',authcontroller.protect,usercontroller.UpdateUserWithTodo);

module.exports=router;