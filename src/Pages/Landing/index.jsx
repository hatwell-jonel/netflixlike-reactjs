import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Hero from "./Hero";

function Landing() {
  return (
    <>
      <div className="banner">
        <div className="center">
          <Header />
          <Hero />
        </div>
      </div>
    </>
  );
}

export default Landing;
