import React from 'react';
import './login.css';
import profile from "./a.png"
import user from "./user.png"
import nic from "./identity-card.png"
import post from "./post.png"
import contact from "./contact.png"
import email from "./email.png"
import password from "./reset-password.png"
import Navbar from './Navbar';
import {Link} from "react-router-dom"

export default function Signup({signUpHandler}) {

  return (
    <>
      <Navbar />
      <form className="main" onSubmit={signUpHandler}>
         <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>
         </div>
         <div>
           <h1>Signup Page</h1>
           <div>
           <img src={user} alt="user" className="email"/>
             <input type="text" placeholder="user name" className="name" name='name'/>
           </div>
           <div >
           <img src={nic} alt="nic" className="email"/>
             <input type="text" placeholder="user NIC" className="name" name='ssn' />
           </div> 
           <div >
           <img src={post} alt="post" className="email"/>
             <input type="text" placeholder="user post" className="name" name='job'/>
           </div>
           <div >
           <img src={contact} alt="contact" className="email"/>
             <input type="text" placeholder="user contact" className="name" name='phone_number'/>
           </div>
           <div >
           <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="user email" className="name" name='email'/>
           </div>
           <div >
           <img src={password} alt="password" className="email"/>
             <input type="password" placeholder="user pasword" className="name" name='password'/>
           </div>
          <div className="login-button">
          <button>Signup</button>
          </div>
           
            <p className="link">
              <Link to="/">Forgot password ?</Link> Or<Link to="/login">Login</Link>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </form>
    </>
  )
}