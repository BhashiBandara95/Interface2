import './signup.css';


import { useState } from 'react';
function Signin(){
    const [UserName,setUserName] = useState("")
    const [UserNIC,setUserNIC] = useState("")
    const [UserPost,setUserPost] = useState("")
    const [UserUserContact,setUserContact] = useState("")
    const [Useremail,setUseremail] = useState("")
   const [password,setPassword] = useState("")

    const submit = (e)=>{
        e.preventDefault()
        console.log({UserName,UserNIC,UserPost,UserContact,Useremail,password});
    }

function App(){
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             

           </div>


         </div>
         <div>
           <h1>Signin Page</h1>
           <div>
             <input type="text" placeholder="UserName" className="name"/>
           </div>

           <div className="second-input">
             <input type="UserNIC" placeholder="UserNIC" className="number"/>
           </div>

           <div className="third-input">
             <input type="UserPost" placeholder="UserPost" className="name"/>
           </div>

          

           <div className="fifth-input">
             <input type="UserContact" placeholder="UserContact" className="number"/>
           </div>

           <div className="seventh-input">
             <input type="Useremail" placeholder= "Useremail" className="name>
          </div>

          </div>

          <div className="Signup-button">
          
          <button onClick={submit}>Signup </button>
          </div>
           
           
 
         </div>
       </div>
       

     </div>
     </div>
   
  );
}

export default Signup;
   