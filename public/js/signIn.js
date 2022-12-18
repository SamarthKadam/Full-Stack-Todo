import { statusSeek } from "./status.js";
export const signIn=async(name,email,password,passConfirm)=>{

    const data={
        "name":`${name}`,
        "email":`${email}`,
        "password":`${password}`,
        "passwordConfirm":`${passConfirm}`
    }

 try{
  const res= await axios({
     method:'POST',
     url:'https://full-stack-todo-production.up.railway.app/api/v1/users/signup',
     data
 });
 if(res.data.status==='success')
 {
  statusSeek("Account Created",'success');
  window.setTimeout(()=>{
     location.assign('/home');
 },1500)
 }

}catch(err)
{
  statusSeek("Something went wrong",'fail');
}

}