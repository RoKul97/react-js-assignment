import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const userIdInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();
  const [error, setError] = useState(false);
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    // const userDetails = {};
    //console.log(userDetails);
    const enteredEmail = userIdInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (enteredEmail.trim() === "" && enteredPassword.trim() === "") {
      alert("Please enter login credentials to continue");
      return;
    }
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCvvzapmZCl92bpzAsGl1PqaCzpKSP3130";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log(data);
            let errorMessage = "Auth Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            //alert(errorMessage);
            console.log(errorMessage);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        //console.log(authCtx);
        //const expTime = new Date(new Date().getTime() + +data.expiresIn * 1000);
        authCtx.login(data.idToken);
        history.replace("/dashboard");
      })
      .catch((err) => {
        //alert("coming from here" + err.message);
        console.log(err.message);
        setError(true);
      });
  };

  return (
    <section className={classes.auth}>
      <h2>iJavaScript</h2>
      <form onSubmit={submitHandler}>
        {error && (
          <p
            style={{
              color: "white",
              border: "thin solid black",
              padding: "10px",
              fontStyle: "italic",
              backgroundColor: "#ff6666",
            }}
          >
            Error: Invalid Credentials!
          </p>
        )}
        <div className={classes.control}>
          <label className={classes.l1} htmlFor="userId">
            User ID
          </label>
          <input type="email" ref={userIdInputRef} />
        </div>
        <div className={classes.control}>
          <label className={classes.l2} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            minLength={6}
            maxLength={20}
            ref={passwordInputRef}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default AuthForm;
