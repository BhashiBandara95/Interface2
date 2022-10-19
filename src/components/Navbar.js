import React, { useState,useEffect } from 'react';
import Cookies from 'js-cookie'
import jwt from "jsonwebtoken";
import "./css/navbar.css"
import {Link} from "react-router-dom"

export default function Navbar(){
    
    const [auth,setAuth] = useState(false)

    useEffect(()=>{
        const token = Cookies.get('jwt')
        jwt.verify(token,'jwtsecret',(err,token)=>{
          if (token) setAuth(true)
          if (err) setAuth(false) 
        })
    },[])

    return (
        <div className="navbar">
            <span className="active" ><Link to="/">Home</Link></span>
            {auth && <span><Link to="/logout">Logout</Link></span>}
            {!auth && <span><Link to="/signup">Signup</Link></span>}
            {!auth && <span><Link to="/login">Login</Link></span>}
        </div>
    )

}

