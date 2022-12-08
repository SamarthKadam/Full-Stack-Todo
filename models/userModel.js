const mongoose=require('mongoose');
const validatingemail=require('email-validator');
const bcrypt=require('bcryptjs');


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'User must contain name']
    },
    email:{
        type:String,
        required:[true,'please provide your email'],
        unique:true,
        lowercase:true,
        validate:{
        validator:function(el)
        {
            return validatingemail.validate(el);
        },
        message:'pleave provide valid email'
    }},
    password:{
        type:String,
        select:false,
        required:[true,'please provide valid password'],
        minlength:8,
    },
    passwordConfirm:{
        type:String,
        required:[true,'please provide your passwordConfirm'],
        validate:{
            validator:function(el)
            {
                return el===this.password;
            },
            message:'please confirm your password'
        }
    },
    active:{
        type:Boolean,
        default:true,
        select:false
    },
})

userSchema.pre('save',async function(next){

    if(!this.isModified('password')) return next();

    this.password=await bcrypt.hash(this.password,12);
    this.passwordConfirm=undefined;
    next();
})

userSchema.pre(/^find/,function(next){
    this.find({active:{$ne:false}});
    next();
})

userSchema.methods.correctPassword=async function(typedPassword,Fetchedpassword)
{ 
    return await bcrypt.compare(typedPassword,Fetchedpassword);
};

const users=mongoose.model('users',userSchema);
module.exports=users;