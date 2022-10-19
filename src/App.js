import React from 'react';
import Home from "./components/Home"
import Login from "./components/Login";
import Signup from "./components/Singup";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import Cookies from 'js-cookie'
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {

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
    })
    .catch(err=>{
      console.log(err);
    })
  }

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup signUpHandler={signUpHandler}/>} />
      </Routes>
    </BrowserRouter>
  )

}
