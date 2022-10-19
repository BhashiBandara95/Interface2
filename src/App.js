
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Singup";

import {useState} from "react"

function App() {

  const [showSignIn,setShowSignin] = useState(false)
  const [showSignup,setShowSignup] = useState(false)

  const renderSignin = ()=>{
    setShowSignin(true)
    setShowSignup(false)
  }
  const renderSignup = ()=>{
    setShowSignin(false)
    setShowSignup(true)
   
  }

  return (
    <div className="App">
      
      <Navbar renderSignin={renderSignin} renderSignup={renderSignup} />

      {showSignIn && <Login /> }

      {showSignup && <Signup />}

     
    </div>
  );
}

export default App;