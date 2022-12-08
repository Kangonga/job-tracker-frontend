import { useState } from "react";
import { Error, FormField } from '..';


function SignUpForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
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
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div id="loginContainer">
      <section id="loginModal">
        <form onSubmit={handleSubmit} >
          <p>Create your account</p>

          <FormField>
            <input
              type="text"
              id="email"
              autoComplete="off"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormField>

          <FormField>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Your Password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </FormField>

          <FormField>

            <input
              type="password"
              id="password_confirmation"
              value={passwordConfirmation}
              placeholder="Confirm Your Password"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              autoComplete="current-password"
            />
          </FormField>

          <FormField>
            <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
          </FormField>

          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>

        </form>
      </section>
    </div >
  );
}

export default SignUpForm;