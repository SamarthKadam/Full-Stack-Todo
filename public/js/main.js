import { login } from "./login.js";
import { signIn } from "./signIn.js";
import {App} from './createTodo.js';
import { Render } from './render.js';
import { createTodo } from "./initialCreate.js";
import { GetTodo } from "./getTodos.js";
import { DeleteTodo } from "./DeleteTodo.js";
const vid=document.querySelector('.vid');
const addButton=document.querySelector('.Add-Button');
let Todos=[];
if(vid)
{
vid.play();
}

GetTodo().then((data)=>{
    Todos=data;
    console.log(Todos);
})

const loginBtn=document.querySelector('.login_button');
const signBtn=document.querySelector('.sign-button');
if(loginBtn)
{
    const username=document.querySelector('#userName')
    const password=document.querySelector('#userPass');

    loginBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        const usernameVal=username.value;
        const passwordVal=password.value;

        if(!username || !passwordVal)
        {
            alert('Please enter valid password or email');
            return;
        }

        username.value='';
        password.value=''

        loginBtn.innerHTML='loading....';
        login(usernameVal,passwordVal);
    })
}
if(signBtn)
{

    const name=document.querySelector('#Name_Sign');
    const email=document.querySelector('#Email_Sign');
    const password=document.querySelector('#Pass_Sign');
    const passConfirm=document.querySelector('#CPass_Sign')

    signBtn.addEventListener('click',()=>{
        signIn(name.value,email.value,password.value,passConfirm.value);
    })

}


if(addButton)
{
addButton.addEventListener('click',()=>{
 
 const msg=prompt("Enter you todo 😊")
 if(!msg)return;
 const Todo=new App(msg);
 Todo._calctime(new Date(Date.now()));
 Todos.push(Todo);


 console.log(Todos.length);
 if(Todos.length==1)
 {
 createTodo(Todos,0);
 }
 else{
    console.log("Find Alternative");
    createTodo(Todos,1);
 }
 Render(Todos);
});
}


window.addEventListener('click',(e)=>{
    if(e.target.classList.contains('Priority_Star'))
    {
      let item=e.target.closest('.TemplateTodo').dataset.itemno;
      DeleteTodo(Todos,item);
      console.log(Todos.length);
      Render(Todos);
    }
})