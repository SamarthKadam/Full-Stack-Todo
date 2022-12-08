const express=require('express');
const app=express();
const path=require('path');
const globaErrorHandler=require('./utils/errorControl');
const userRouter=require('./routes/userRouter');
const viewRouter=require('./routes/viewroutes');
const AppError = require('./utils/AppError');
const morgan=require('morgan');
const pug=require('pug');

app.use(express.json()); ///This makes one to write in body that is for post request


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));


app.use((req,res,next)=>{
    console.log("hello from the middleware");
    next();
})
/// This is the middleware with next funtion

app.use('/api/v1/users',userRouter);
app.use('/',viewRouter);

app.all('*',(req,res,next)=>{
    
    next(new AppError(`TypeError`,404));
})
//If user types some unusual error above code would take care


app.use(globaErrorHandler);
//This is the global error handler where

module.exports=app;