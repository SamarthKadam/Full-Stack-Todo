export const GetTodo=async()=>{

    try{
    const data=await axios({
        method:'GET',
        url:'https://fullstackweb.onrender.com/api/v1/todos/UsersTodo',
    })
    return data.data.todo;
    }
    catch(err)
    {
        // console.log(err);
        return [];
    }
}