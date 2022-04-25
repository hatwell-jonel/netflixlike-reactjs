import React from "react";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero_title">
          <h1 className="hero_title-main">
            Unlimited movies, TV <br></br> shows, and more.
          </h1>
          <h2 className="hero_title-submain">Watch anywhere. Cancel anytime</h2>

          <form className="form_email">
            <h3 className="form_email-title">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
          </form>
        </div>
      </div>
    </>
  );
}

export default Hero;
