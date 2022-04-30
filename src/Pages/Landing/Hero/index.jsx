import React from "react";
import GetEmail from "../../../Components/Getemail";

function Hero() {
  return (
    <>
      <div className="hero border-bottom">
        <div className="container">
          <h1 className="title">Unlimited movies, TV shows, and more.</h1>
          <h2 className="sub-title">Watch anywhere. Cancel anytime.</h2>
          <GetEmail />
        </div>
      </div>
    </>
  );
}

export default Hero;
