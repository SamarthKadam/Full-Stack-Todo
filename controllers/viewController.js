const catchasync = require("../utils/catchasync");
const Todo=require('../models/todoModel');
exports.getLoginForm=(req,res)=>{

    res.status(200).render('login',{
        title:'Login'
    });
}

exports.getSignForm=(req,res)=>{
    res.status(200).render('signup',{
        title:'Sign Up'        
    })
}

exports.getHomePage=catchasync(async(req,res)=>{

    const data=await Todo.find({user:{_id:req.user._id}});
    let NameText=req.user.name.split(' ');
    let symbol=`${NameText[0][0]}${NameText[1][0]}`.toUpperCase() || `${req.user.name[0]}`;
    let todos=[];

    if(data.length===0)
    {
       return res.status(200).render('home',{
            title:'Home',
            user:req.user,
            symbol,
            todos
        })
    }


    const [{todo}]=data;
    res.status(200).render('home',{
        title:'Home',
        user:req.user,
        symbol,
        todos:todo
    });
})