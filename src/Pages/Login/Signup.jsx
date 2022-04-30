import React from "react";
import logo from "../../images/logo-netflix.png";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="login">
      <div className="">
        <div className="logo">
          <img src={logo} alt="netflix" />

          <form className="form">
            <h1 className="form-title">Sign Up</h1>

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

              <div className="form-floating mb-3">
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

              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  maxLength={25}
                  autoComplete="off"
                />
                <label htmlFor="floatingPassword">Confirm Password</label>
              </div>

              <button type="submit" className="btn btn-signin">
                Sign Up
              </button>
            </div>
            <p className="form-signup mt-2">
              Already have Netflix?{" "}
              <Link to="/signin" className="link">
                Sign In.
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
