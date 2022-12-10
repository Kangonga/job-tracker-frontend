import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "./Dashboard";

function SignUpForm() {
  const {user,setUser} = useContext(AppContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
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
        r.json().then((user) =>setUser(user))
      }
        else {
        r.json().then((err) => console.log(err));
      }
    });
  }

  return (
    <>
    { user? <Navigate to="/dashboard" />:<SignUp 
    handleSubmit={handleSubmit}
    email={email}
    password={password}
    passwordConfirmation = {passwordConfirmation}
    setPassword = {setPassword}
    setPasswordConfirmation = {setPasswordConfirmation}
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

export default SignUpForm;