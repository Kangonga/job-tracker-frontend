import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Error, FormField } from "..";
import { Link } from "react-router-dom";

export default function LoginForm() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
   const [user, setUser] = useState("");
   const [formdata, setFormData] = useState({
    email:"",
    password:""
   })
//console.log(user)
//   function handleSubmit(e) {
   
//     e.preventDefault();
//     setIsLoading(true);
//     fetch("/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     }).then((r) => {
//       setIsLoading(false);
//       if (r.ok) {
//         //r.json().then((user) => onLogin(user));
//         r.json().then((user) => setUser(user));
        
//         //console.log(user)
//       } else {
//         r.json().then((err) => setErrors(err.errors));
//       }
//     });
//   }
//    function changeRoute() {
//     <Navigate to="dashboard"/>
//    }
    const [username, setUsername] = useState("");
    function change(e) {
        setFormData({
            ...formdata,
            [e.target.name]:e.target.value
            })
            console.log(formdata)
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      })
        .then((r) => r.json())
        .then((user) => setUser(user));
       



    }
    
  return (
    <>
      <div id="loginContainer">
        <section id="loginModal">
          <span className="smallText">Welcome back! 👋</span>

          <form onSubmit={handleSubmit}>
            <p>Sign in to your account</p>

            <input
              type="email"
              id="email"
              name="email"
              value={formdata.email}
              placeholder="Your email"
              onChange={(e) => change(e)}
            />

            <input
              type="password"
              id="password"
              name="password"
              value={formdata.password}
              placeholder="Your Password"
              onChange={(e) => change(e)}
            />

            <button  type="submit">sign-in</button>
            {user? <Navigate replace to="dashboard" />: "" }
          
            {/* <FormField>
              {errors.map((err) => (
                <Error key={err}>{err}</Error>
              ))}
            </FormField> */}
          </form>
          {/* <Link to="dashboard">click</Link> */}

        </section>
      </div>

    </>
  );
}