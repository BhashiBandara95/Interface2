import React from 'react';
import "./css/navbar.css"
import {Link} from "react-router-dom"

export default function Navbar(){
    

    return (
        <div className="navbar">
            <span className="active" ><Link to="/">Home</Link></span>
            <span><Link to="/signup">Signup</Link></span>
            <span><Link to="/login">Login</Link></span>
        </div>
    )

}

