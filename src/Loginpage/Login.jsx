import React, { useContext } from "react";
import "./Login.css";
import { AuthContext } from "../context";
function Login() {
  const { setInputFields,submitHandler } = useContext(AuthContext);
  console.log(useContext(AuthContext));
  
  const inputDataHandler = (e) => {
    setInputFields((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="login-layout">
      <div className="login-section">
        <form className="login-fields" onSubmit={submitHandler}>
          <h3 className="signing-header" style={{ color: "white" }}>
            Sign In
          </h3>
          <div>
            {/* <label htmlFor="username">User Name </label> */}
            <input
              className="text-input"
              type="text"
              id="userName"
              name="userName"
              placeholder="username"
              onChange={inputDataHandler}
            />
          </div>
          <div>
            {/* <label htmlFor="password">Password </label> */}
            <input
              className="text-input"
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              onChange={inputDataHandler}
            />
          </div>
          <div>
            <input type="submit" className="signing-btn" />
          </div>
          <div className="forgot-psword">
            <p>Forgot password?</p>
          </div>
        </form>
        <div className="signup">
          <p>New to Movie World ? Sign up</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
