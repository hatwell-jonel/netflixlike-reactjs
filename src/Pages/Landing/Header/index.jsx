import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import logo from "../../../images/logo-netflix.png";
import Dashboard from "../../Dashboard";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <img src={logo} className="img-fluid logo" alt="netflix" />
          <Link to="/signin">
            <button className="btn btn-signin">Sign In</button>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
