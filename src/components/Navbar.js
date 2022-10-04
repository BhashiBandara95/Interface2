import "./css/navbar.css"

export default function Navbar({renderSignin,renderSignup}){
    

    return (
        <div className="navbar">
            <a className="active" href="/"><i className="fa fa-fw fa-home"></i> Home</a>
            <span onClick={renderSignin}><a href="#" ><i className="fa fa-fw fa-envelope"></i> Signin</a></span>
            <span><a href="#"><i className="fa fa-fw fa-user" onClick={renderSignup}></i> Signup</a></span>
            
        </div>
    )

}

