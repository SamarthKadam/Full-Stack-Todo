const AppError=require('./AppError');

// const sendErrorDev=(err,res)=>{
//   res.status(err.statusCode).json({
//     status:err.status,
//     err,
//     message:err.message,
//     stack:err.stack
// })
// }

const sendErrorProd=(err,res)=>{
  res.status(err.statusCode).json({
    status:err.status,
    message:err.message
  })
}

const HandleTypeError=(err,req)=>{
  const message=`Can't find ${req.url} in this server`;
  return new AppError(message,400);
}

const  HandleDuplicateError=(err)=>{
    const message=`Invalid DuplicateField:${err.keyValue.email}`;
    return new AppError(message,404);
}

const HandleValidation=(err)=>{

  return new AppError('Invalid input data',400);
}

const HandleRandomError=(err)=>{
  return new AppError(err.message,400);
}

const HandleJsonTokenError=(err)=>{
  return new AppError('Invalid token please log in again!',401);
}

const HandleTokenExpiration=(err)=>{
  return new AppError('Your token has expired please log in again',401);
}

module.exports=(err,req,res,next)=>{
       
      err.statusCode=err.statusCode||500
      err.status=err.status||'fail'
 

      let error={...err};

      if(err.message==='TypeError')
      {
        error=HandleTypeError(err,req);
      }


      if(err.code===11000)
      {
        error=HandleDuplicateError(error);
      }
      if(err.name==='ValidationError')
      {
        error=HandleValidation(err);
      }
      if(err.name==='JsonWebTokenError')
      {
        error=HandleJsonTokenError(err);
      }
      if(err.name==='TokenExpiredError')
      {
        error=HandleTokenExpiration(err);
      }
      else{
        error=HandleRandomError(err);
      }

    sendErrorProd(error,res);

}