const Todo=require('../models/todoModel');
const catchAsync=require('../utils/catchasync');

exports.createTodo=catchAsync(async(req,res,next)=>{


    const todo=await Todo.create({
        todo:req.body.todo,
        user:req.body.user
    })

    res.status(200).json({
        status:'success',
        data:todo
    })

})


exports.getAllTodo=catchAsync(async(req,res,next)=>{
    
    const todos=await Todo.find().populate('user');
    
    res.status(200).json({
        status:'success',
        data:todos
    })
})


exports.UserTodos=catchAsync(async(req,res,next)=>{

    const data=await Todo.find({user:{_id:req.user._id}});
    const [{todo}]=data;
    res.status(200).json({
        status:'success',
        todo
    })
})

exports.UpdateTodos=catchAsync(async(req,res,next)=>{
    
    const upd={
        todo:req.body.todo
    }
    const data=await Todo.findOneAndUpdate({user:{_id:req.user._id}},upd,{
        new:true,
        runValidators:true
    });

    res.status(200).json({
        status:'success',
        data
    })
})

exports.DeleteTodos=catchAsync(async(req,res,next)=>{

    const data=await Todo.findOneAndDelete({user:{_id:req.user._id}});
    res.status(200).json({
        status:'success'
    })
})