export const DeleteTodo=async(Todo,item)=>{


    Todo.splice(item-1,1);


    let todo=Todo;
        let patchReq=await axios({
            method:'PATCH',
            url:'http://127.0.0.1:8000/api/v1/todos/UpdateTodos',
            data:{
                todo
            }
        })

        if(Todo.length===0)
        {
            console.log("What the fuck is happening");
            let Delreq=await axios({
                method:'DELETE',
                url:'http://127.0.0.1:8000/api/v1/todos/DeleteTodos'
            })
            Todo.splice(item-1,1);
            return;
        }


        // console.log(patchReq);
}