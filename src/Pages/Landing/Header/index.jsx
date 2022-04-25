import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import logo from "../../../images/logo-netflix.png";
import Dashboard from "../../Dashboard";

function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} className="img-fluid logo" alt="netflix" />
        <Link to="dashboard">
          <button className="btn">Sign In</button>
        </Link>
      </header>
    </>
  );
}

export default Header;
