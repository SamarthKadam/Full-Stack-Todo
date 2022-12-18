export const GetTodo=async()=>{

    try{
    const data=await axios({
        method:'GET',
        url:'https://full-stack-todo-production.up.railway.app/api/v1/todos/UsersTodo',
    })
    return data.data.todo;
    }
    catch(err)
    {
        // console.log(err);
        return [];
    }
}