import { login } from "./login.js";
const loginBtn=document.querySelector('.sign-button');

if(loginBtn)
{
    const username=document.querySelector('#userName')
    const password=document.querySelector('#userPass');
   

    loginBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        const usernameVal=username.value;
        const passwordVal=password.value;
        login(usernameVal,passwordVal);
    })
}