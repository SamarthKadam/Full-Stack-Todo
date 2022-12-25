export const UpdateTodosList=async(Todos)=>{

    let todo=Todos;
        let patchReq=await axios({
            method:'PATCH',
            url:'http://127.0.0.1:8000/api/v1/todos/UpdateTodos',
            data:{
                todo
            }
        })

}