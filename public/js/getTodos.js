export const GetTodo=async()=>{
    const data=await axios({
        method:'GET',
        url:'http://127.0.0.1:8000/api/v1/todos/UsersTodo',
    })
    return data.data.todo;
}