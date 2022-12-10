import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import {AppContext} from "../App"

export default function Login() {
  const {me,setMe} = useContext(AppContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [user,setUser] = useState("");
  const [tru, setru] = useState(false);
  function handleSubmit(e) {
    setru(true)
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) =>{
          setUser(user)
          setMe(user)
        }
        )
      }
        else {
        r.json().then((err) => console.log(err));
      }
    });
  }

  return (
    <>
    {console.log(me)}
    {/* {user?console.log(user):""} */}
    {user? <Navigate to="/dashboard" />:<Loginone 
    handleSubmit={handleSubmit}
    email={email}
    password={password}
    passwordConfirmation = {passwordConfirmation}
    setPassword = {setPassword}
    setPasswordConfirmation = {setPasswordConfirmation}
    setEmail = {setEmail}
    />}
    </>
  )
}

function SignUp({setPasswordConfirmation,handleSubmit,email,setEmail,setPassword,password,passwordConfirmation}){
<div id="loginContainer">
      <section id="loginModal">
        <form onSubmit={handleSubmit} >
          <p>Create your account</p>

          <form>
            <input
              type="text"
              id="email"
              autoComplete="off"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>

          <form>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Your Password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </form>

          <form>

            <input
              type="password"
              id="password_confirmation"
              value={passwordConfirmation}
              placeholder="Confirm Your Password"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              autoComplete="current-password"
            />
          </form>

        </form>
      </section>
    </div >
}


 function Loginone({setPasswordConfirmation,handleSubmit,email,setEmail,setPassword,password,passwordConfirmation}){
    return(
        <>
        <form id="loginContainer" onSubmit={handleSubmit}>

            <section id="loginModal">
            <span className="smallText">Welcome back! 👋</span>

            <p>Sign in to your account</p>

            <input type="email" name="email"
            placeholder="Your email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <input type="password" name="password"
            id="password"
            value={password}
            placeholder="Your Password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            />

            <button name="submit">
                Sign In
            </button>
            <a href="#" className="forgotPassword">
                Forgot Password?
            </a>


            <a href="#" className="signUpLink"> Don't have an account? Sign Up </a>
            </section>
        </form>
        
        </>
    )
}