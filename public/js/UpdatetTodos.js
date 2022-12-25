export const UpdateTodosList=async(Todos)=>{

    let todo=Todos;
        let patchReq=await axios({
            method:'PATCH',
            url:'https://full-stack-todo-production.up.railway.app/api/v1/todos/UpdateTodos',
            data:{
                todo
            }
        })

}