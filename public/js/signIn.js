import { statusSeek } from "./status.js";
const signBtn=document.querySelector('.sign-button');
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
     url:'https://fullstackweb.onrender.com/api/v1/users/signup',
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
    signBtn.innerHTML='SIGN UP'
  statusSeek("Something went wrong",'fail');
}

}