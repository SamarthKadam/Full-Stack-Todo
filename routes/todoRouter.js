const express=require('express');
const todocontroller=require('../controllers/todoController');
const authcontroller=require('../controllers/authController');
const router=express.Router();

router.post('/create',todocontroller.createTodo);
router.get('/getAll',todocontroller.getAllTodo);
router.get('/UsersTodo',authcontroller.protect,todocontroller.UserTodos); ///To find the todo of particular user
router.patch('/UpdateTodos',authcontroller.protect,todocontroller.UpdateTodos);
router.delete('/DeleteTodos',authcontroller.protect,todocontroller.DeleteTodos);

module.exports=router;