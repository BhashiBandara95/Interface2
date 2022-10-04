import './login.css';
import profile from "./a.png"
import user from "./user.png"
import nic from "./identity-card.png"
import post from "./post.png"
import contact from "./contact.png"
import email from "./email.png"
import password from "./reset-password.png"




export default function Signup() {

  const myFn = async(event)=>{
    event.preventDefault()
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // console.log(JSON.parse);
    const res = await fetch('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-anjli/endpoint/client/add',{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify(data)
    })
    if (res.status === 200) {
     
    }
    else {
      
    }
  }

  return (
    <form className="main" onSubmit={myFn}>
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
             <input type="text" placeholder="user name" className="name" name='user'/>
           </div>
           <div >
           <img src={nic} alt="nic" className="email"/>
             <input type="text" placeholder="user NIC" className="name" name='nic' />
           </div> 
           <div >
           <img src={post} alt="post" className="email"/>
             <input type="text" placeholder="user post" className="name" name='post'/>
           </div>
           <div >
           <img src={contact} alt="contact" className="email"/>
             <input type="text" placeholder="user contact" className="name" name='contact'/>
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
              <a href="/">Forgot password ?</a> Or<a href="/">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </form>
  )
}