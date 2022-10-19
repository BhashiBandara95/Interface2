import React from 'react';
import './login.css';
import profile from "./a.png"
import password_img from "./reset-password.png"
import email_img from "./email.png"
import {Link} from "react-router-dom"
import Navbar from './Navbar';

export default function Login({loginHander,setEmail,setPassword}) {


  return (
    <>
      <Navbar />
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />

              </div>


            </div>
            <div>
              <h1>Login Page</h1>
              <div>
                <img src={email_img} alt="email" className="email" />
                <input type="text" placeholder="user name" className="name"  onChange={(e) => { setEmail(e.target.value) }} required/>
              </div>
              <div className="second-input">
                <img src={password_img} alt="pass" className="email" />
                <input type="password" placeholder="password" className="name"  onChange={(e) => { setPassword(e.target.value) }} required/>
              </div>
              <div className="login-button">
                <button onClick={loginHander}>Login</button>
              </div>

              <p className="link">
                <Link href="/">Forgot password ?</Link> Or<Link href="/signup">Sign Up</Link>
              </p>


            </div>
          </div>


        </div>
      </div>
    </>
  );
}
