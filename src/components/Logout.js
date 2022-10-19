import React, { useEffect } from "react";
import Cookies from "js-cookie";

export default function Logout() {

    useEffect(()=>{
        Cookies.remove('jwt')
        window.location.href = '/'
    },[])


    return <div></div>
}