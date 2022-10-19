import React from 'react';
import Home from "./components/Home"
import Login from "./components/Login";
import Signup from "./components/Singup";
import Logout from './components/Logout';
import Profile from "./components/Profile";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import Cookies from 'js-cookie'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

export default function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signUpHandler = event => {
    event.preventDefault()
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data['password'] = CryptoJS.AES.encrypt(data['password'], 'secret').toString();
    
    fetch('https://data.mongodb-api.com/app/born-yahdr/endpoint/grp2/create',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(async(res)=>{
      if (res.status === 201) return res.json()
      const error = await res.json()
      throw Error(error.message)
    })
    .then(data=>{
      const token = jwt.sign(data,'jwtsecret',{expiresIn:3600})
      Cookies.set('jwt',token)
      window.location.href = '/'
    })
    .catch(err=>{
      console.log(err);
    })
  }

  const loginHander = () => {
    fetch(`https://data.mongodb-api.com/app/born-yahdr/endpoint/grp2/readbyemail?email=${email}`)
      .then(res=>res.json())
      .then(data=>{
        if (data !== null) {
          var bytes  = CryptoJS.AES.decrypt(data['password'], 'secret');
          var originalText = bytes.toString(CryptoJS.enc.Utf8);
          if (originalText === password) {
            const token = jwt.sign({id:data._id},'jwtsecret',{expiresIn:3600})
            Cookies.set('jwt',token)
            window.location.href = '/'
          }
        }

      })
  }


  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login loginHander={loginHander} setEmail={setEmail} setPassword={setPassword} />} />
          <Route path="/signup" element={<Signup signUpHandler={signUpHandler}/>} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )

}
