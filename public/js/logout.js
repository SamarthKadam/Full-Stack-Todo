export const logout=async()=>{
    try{
    const res= await axios({
        method:'GET',
        url:'https://full-stack-todo-production.up.railway.app/api/v1/users/logout',
    });

    if(res.data.status==='success')
    {
        window.location.replace('https://full-stack-todo-production.up.railway.app/login')
        location.reload(true);
    }
    
}catch(err)
{
    console.log(err);
}
}