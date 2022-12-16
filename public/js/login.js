import { statusSeek } from "./status.js";
const loginBtn=document.querySelector('.login_button');
export const login=async(username,password)=>{
   
   const data={
         "email":`${username}`,
         "password":`${password}`
     }

  try{
   const res= await axios({
      method:'POST',
      url:'http://127.0.0.1:8000/api/v1/users/login',
      data
  });
  if(res.data.status==='success')
  {
   statusSeek("Logged in Successfully",'success');
   window.setTimeout(()=>{
      location.assign('/home');
  },1500)
  }

}catch(err)
{
   console.log(err);
   console.log("Something went wrong");
   loginBtn.innerHTML='SIGN IN';
   statusSeek(err.response.data.message,'fail');
}

}