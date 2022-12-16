const catchAsync=require('../utils/catchasync');
const User=require('../models/userModel');
exports.getAllUsers=catchAsync(async(req,res,next)=>{
    
    const user=await User.find();

    res.status(200).json({
        status:'success',
        user
    })
})
exports.getMe=(req,res,next)=>{
    const data=req.user;
    res.status(200).json({
        data
    })
}

// exports.UpdateUserWithTodo=catchAsync(async(req,res,next)=>{

//     const data={
//         todo:req.body.todo
//     };
//     const user=await User.findByIdAndUpdate(req._id,data);
//     res.status(200).json({
//         status:'success',
//         user  
//     })
// })