import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Faq from "./Faqs";
import Footer from "./Footer";

function Landing() {
  return (
    <>
      <div className="banner">
        <Header />
        <Hero />
        <About />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default Landing;
