import "./css/navbar.css"

export default function Navbar({renderSignin},{renderSignup}){
    

    return (
        <div className="navbar">
            <a className="active" href="/"><i className="fa fa-fw fa-home"></i> Home</a>
            <a href="#" onClick={renderSignin}><i className="fa fa-fw fa-envelope"></i> Signin</a>
            <a href="/"><i className="fa fa-fw fa-user"></i> signup</a>
        </div>
    )

}

