import { useEffect, useState , useContext} from "react"
import Logo from "../assets/person-logo.png"
import { AppContext } from '../App';


export default function Profile(){
    const {me,setMe} = useContext(AppContext)
    let title = "Junior software Engineer"
    const [user,setUser] = useState('')
    useEffect(()=>{
        fetch("/users/1")
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
                        <input type="text" value={me?.username} disabled/>
                    </div>
                    <div>
                        <label htmlFor="name">Title: </label>
                        <input type="text" value={title} disabled/>
                    </div>
                    <div>
                        <label htmlFor="skills">Email: </label>
                        <input type="email" value={me?.email} disabled/>
                    </div>
                    {/* <div>id: {me.id}</div> */}
                </section>
            </main>
        </>
    )
}