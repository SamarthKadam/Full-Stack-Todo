export const UpdateTodosList=async(Todos)=>{

    let todo=Todos;
        let patchReq=await axios({
            method:'PATCH',
            url:'https://fullstackweb.onrender.com/api/v1/todos/UpdateTodos',
            data:{
                todo
            }
        })

}