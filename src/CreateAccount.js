import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./CreateAccount.css";
import { auth } from "./firebase";

function CreateAccount() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  function register(e) {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  }

  return (
    <div className="create-account">
      <Link to="/">
        <img
          className="createAccount-logo"
          src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        ></img>
      </Link>

      <div className="createAccount-container">
        <h1>Create Account</h1>
        <form>
          <h5>Username</h5>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/login">
            <button className="createAccount-SignIn">Sign-in</button>
          </Link>
        </form>
        <p>
          By creating account you agree to Amazon Clone's Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads
        </p>

        <button onClick={register} className="createAccount-registerButton">
          Create Account
        </button>
      </div>
    </div>
  );
}

export default CreateAccount;
