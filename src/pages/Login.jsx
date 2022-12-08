import { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
//import {BrowserRouter} from "react-router-dom"


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Divider />

          <p id="redirects">
            Don't have an account? &nbsp;
            <button onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>

        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <Divider />

          <p id="redirects">
            Already have an account? &nbsp;
            <button onClick={() => setShowLogin(true)}>
              Sign In
            </button>
          </p>

        </>
      )}
    </>
  );
}


const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  width: 50%;
`;

export default Login;