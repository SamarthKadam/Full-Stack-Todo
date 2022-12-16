const mongoose=require('mongoose');
const todoSchema=new mongoose.Schema({
    todo:{
        type:[Object],
        required:[true,"A Todo must contain todos"]
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'users',
        unique:true,
        required:[true,"A Todo must belong to the user"]
    }
})

const todo=mongoose.model('todo',todoSchema);
module.exports=todo;