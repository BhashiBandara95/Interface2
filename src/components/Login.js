import React from 'react';
import './login.css';
import profile from "./a.png"
import password_img from "./reset-password.png"
import email_img from "./email.png"
import {Link} from "react-router-dom"

import { useState } from 'react';
import Navbar from './Navbar';
function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = (e) => {
    e.preventDefault()
    console.log({ email, password });
  }

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
                <input type="text" placeholder="user name" className="name" value={email} onChange={(e) => { setEmail(e.target.value) }} />
              </div>
              <div className="second-input">
                <img src={password_img} alt="pass" className="email" />
                <input type="password" placeholder="password" className="name" value={password} onChange={(e) => { setPassword(e.target.value) }} />
              </div>
              <div className="login-button">
                <button onClick={submit}>Login</button>
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

export default Login;