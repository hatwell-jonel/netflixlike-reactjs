import React from "react";
import logo from "../../images/logo-netflix.png";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard";

function Login() {
  return (
    <div className="login">
      <div className="container-lg">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="netflix" />
          </Link>

          <form className="form">
            <h1 className="form-title">Sign In</h1>

            <div className="inputs">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Email"
                  maxLength={35}
                  autoComplete="off"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  maxLength={25}
                  autoComplete="off"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <Link to="/dashboard">
                <button type="submit" className="btn btn-signin">
                  Sign In
                </button>
              </Link>
            </div>
            <p className="form-signup mt-2">
              New to Netflix?{" "}
              <Link to="/signup" className="link">
                Sign up now.
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
