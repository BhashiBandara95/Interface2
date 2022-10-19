import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import Navbar from "./Navbar"
import jwt from "jsonwebtoken";

export default function Home() {
  useEffect(()=>{
    const token = Cookies.get('jwt')
    jwt.verify(token,'jwtsecret',(err,token)=>{
      if (err) window.location.href = '/login'
    })
  },[])
  return (
    <>
      <Navbar/>
    </>
  )
}