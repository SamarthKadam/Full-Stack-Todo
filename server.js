const mongoose=require('mongoose');
const dotenv=require('dotenv');
const app=require('./app');

dotenv.config({path:'./config.env'});

const DBAuth=process.env.DB.replace('<password>',process.env.DBpassword);

mongoose.connect(DBAuth,{
    useCreateIndex:true,
    useNewUrlParser: true, 
    useFindAndModify:false,
    useUnifiedTopology: true 
}).then((con)=>{
    console.log("DB connection successful");
})

// process.on('uncaughtException',(err)=>{
//     console.log("error caused");
//     console.log(err);
// })
// Any error caused that is syntax error would be handled here

process.on('unhandledRejection',err=>{
    console.log(err.name,err.message);
    console.log('UNHANDLED REJECTION');
})

const port=process.env.PORT||8000
const server=app.listen(port,()=>{
    console.log(`App running in Port no:${port}`);
})