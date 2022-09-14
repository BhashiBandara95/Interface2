
import Navbar from "./components/Navbar";
import Login from "./components/Login";

import {useState} from "react"

function App() {

  const [showSignIn,setShowSignin] = useState(false)

  const renderSignin = ()=>{
    setShowSignin(true)
  }

  return (
    <div className="App">
      
      <Navbar renderSignin={renderSignin} />

      {showSignIn &&  <Login />}

     
    </div>
  );
}

export default App;