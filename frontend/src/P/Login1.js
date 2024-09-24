import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import { HandleError, handleSuccess } from '../utlits'
export default function Login1() {
const nav=useNavigate()

const [loginInfo,setLoginInfo]=useState({
    email:'',
    password:''

})

const handleChange=(e)=>{
    const{ name,value} =e.target
    console.log(name,value)

const copyLoginInfo = {...loginInfo}
copyLoginInfo[name]=value
setLoginInfo(copyLoginInfo)
}

console.log('loginInfo -->',loginInfo)
const handleLogin=async(e)=>{
    e.preventDefault()
    const {email,password}=loginInfo
    if(!email||!password){
        return HandleError('all r require')
    }
    try {
        const url="http://localhost:2000/auth/login";
        const response=await fetch(url,{
            method:"POST",
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(loginInfo)
        })
        const re=await response.json()
        const {success,message,name,error,jwtToken  }=re
        if(success)
        {
            handleSuccess(message)
            localStorage.setItem('token',jwtToken)
            localStorage.setItem('loggeedInUser',name)
            setTimeout(()=>{
                nav('/home')
            },1000)
        }
        console.log(re)
    } catch (error) {
        HandleError('err')
    }
}

  return (
    <div className='container'>
        <h1>
            login
        </h1>
        <form onSubmit={handleLogin}>       

            <div>
                <label htmlFor='email'>Email</label>
                <input
                   onChange={handleChange}
                name = "email"
                type = "email"
                placeholder="Enter email"
                value={loginInfo.email}
                />
            </div>






            <div>
                <label htmlFor='password'>Password</label>
                <input
                   onChange={handleChange}
                name = "password"
                type = "password"
                placeholder="Enter password"
                value={loginInfo.password}
                />
            </div>
            <button>login</button>
            <span>
            don't have an account? 
            <Link to="/signup">
                Login
            </Link>
        </span>        

</form>

        <ToastContainer/>
    </div>
  )
}
