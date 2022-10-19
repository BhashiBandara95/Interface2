import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar"

export default function Profile() {
    const [user,setUser] = useState(false)
    useEffect(()=>{
        const id = localStorage.getItem('_id')
        fetch(`https://data.mongodb-api.com/app/born-yahdr/endpoint/grp2/readbyid?id=${id}`)
            .then(res=>res.json())
            .then(data=>{
                setUser(data)
            })
    },[])

    return (
        <>
            <Navbar/>
            {
                user
                &&
                <table>
                    <tbody>
                        <tr>
                            <td>name</td>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <td>nic</td>
                            <td>{user.ssn}</td>
                        </tr>
                        <tr>
                            <td>post</td>
                            <td>{user.job}</td>
                        </tr>
                        <tr>
                            <td>contact</td>
                            <td>{user.phone_number}</td>
                        </tr>
                        <tr>
                            <td>email</td>
                            <td>{user.email}</td>
                        </tr>
                    </tbody>
                </table>
            }
        </>
    )

}