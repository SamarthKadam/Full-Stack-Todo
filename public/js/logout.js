export const logout=async()=>{
    try{
    const res= await axios({
        method:'GET',
        url:'https://fullstackweb.onrender.com/api/v1/users/logout',
    });

    if(res.data.status==='success')
    {
        window.location.replace('https://fullstackweb.onrender.com/login')
    }
    
}catch(err)
{
    console.log(err);
}
}