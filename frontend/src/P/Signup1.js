import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import { HandleError, handleSuccess } from '../utlits'
export default function Signup1() {
const nav=useNavigate()

const [signupInfo,setSignupInfo]=useState({
    name:'',
    email:'',
    password:''

})

const handleChange=(e)=>{
    const{ name,value} =e.target
    console.log(name,value)

const copySignupInfo = {...signupInfo}
copySignupInfo[name]=value
setSignupInfo(copySignupInfo)
}

console.log('signupInfo -->',signupInfo)
const handleSignup=async(e)=>{
    e.preventDefault()
    const {name,email,password}=signupInfo
    if(!name||!email||!password){
        return HandleError('all r require')
    }
    try {
        const url="http://localhost:2000/auth/signup";
        const response=await fetch(url,{
            method:"POST",
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(signupInfo)
        })
        const re=await response.json()
        const {success,message,error}=re
        if(success)
        {
            handleSuccess(message)
            setTimeout(()=>{
                nav('/login')
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
            Signup
        </h1>
        <form onSubmit={handleSignup}>       






        <div>
                <label htmlFor='name'>Name</label>
                <input
                onChange={handleChange}
                name = "name"
                type = "text"
                placeholder="Enter name"
                />
            </div>





            <div>
                <label htmlFor='email'>Email</label>
                <input
                   onChange={handleChange}
                name = "email"
                type = "email"
                placeholder="Enter email"
                />
            </div>






            <div>
                <label htmlFor='password'>Password</label>
                <input
                   onChange={handleChange}
                name = "password"
                type = "password"
                placeholder="Enter password"
                />
            </div>
            <button>Signup</button>
            <span>
            Already have an account? 
            <Link to="/login">
                Login
            </Link>
        </span>        

</form>

        <ToastContainer/>
    </div>
  )
}
