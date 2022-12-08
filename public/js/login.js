import axios from "axios"

export const login=(username,password)=>{
     axios('127.0.0.1:8000/api/v1/users/getAllUsers').then((data)=>{
        console.log(data);
     })
}