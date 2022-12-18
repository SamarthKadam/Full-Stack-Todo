export const logout=async()=>{
    try{
    const res= await axios({
        method:'GET',
        url:'http://127.0.0.1:8000/api/v1/users/logout',
    });

    if(res.data.status==='success')
    {
        window.location.replace('http://127.0.0.1:8000/login')
    }
    
}catch(err)
{
    console.log(err);
}
}