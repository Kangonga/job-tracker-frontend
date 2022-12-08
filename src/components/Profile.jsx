import { useEffect, useState } from "react"
import Logo from "../assets/person-logo.png"

export default function Profile(){
    let title = "Junior software Engineer"
    const[user,setUser] = useState("")
    useEffect(()=>{
        fetch("/me")
        .then(resp=>resp.json())
        .then(data=>setUser(data))
    },[])
    return(
        <>
            <header>
                <figure>
                    <img src={Logo} className="personImage" alt="icon"></img>
                    <figcaption>
                  
                </figcaption>
                </figure>
                
            </header>
            <main id="profileMain">
                <h2>User profile</h2>
                <section id="profile">
                   <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" value={user?.username} disabled/>
                    </div>
                    <div>
                        <label htmlFor="name">Title: </label>
                        <input type="text" value={title} disabled/>
                    </div>
                    <div>
                        <label htmlFor="skills">Email: </label>
                        <input type="email" value={user?.email} disabled/>
                    </div>
                </section>
            </main>
        </>
    )
}