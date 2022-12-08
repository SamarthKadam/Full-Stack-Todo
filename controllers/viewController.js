
exports.getLoginForm=(req,res)=>{

    res.status(200).render('login',{
        title:'Login'
    });
    // res.status(200).json({
    //     data:'success'
    // })
}