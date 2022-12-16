import { GetTodo } from "./getTodos.js";
export const createTodo=async(Todo,Modify)=>{
    try{
    const cont=await axios({
        method:'GET',
        url:'http://127.0.0.1:8000/api/v1/users/getMe'
    })
    const user=cont.data.data._id;
    const data={
        todo:Todo,
        user
    }
    let res;
    if(Modify===0)
    {
     res= await axios({
        method:'POST',
        url:'http://127.0.0.1:8000/api/v1/todos/create',
        data
    });
    }
    else{
        let todo=Todo;
        let patchReq=await axios({
            method:'PATCH',
            url:'http://127.0.0.1:8000/api/v1/todos/UpdateTodos',
            data:{
                todo
            }
        })

        console.log(patchReq);


    }
    // GetTodo()


    }catch(err)
    {
        console.log("Something went wrong");
        console.log(err);
    }
}