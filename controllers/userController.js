const catchAsync=require('../utils/catchasync');
const User=require('../models/userModel');
exports.getAllUsers=catchAsync(async(req,res,next)=>{
    
    const user=await User.find();

    res.status(200).json({
        status:'success',
        user
    })
})
