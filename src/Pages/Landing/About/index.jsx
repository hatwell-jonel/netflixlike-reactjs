import React from "react";
import imgtv from "../../../images/landing-pictv.png";
import videoanimation from "../../../images/landing-tvvideo.m4v";
import mobile from "../../../images/home-mobile.jpg";
import boxpic from "../../../images/landing-boxpic.png";
import downloadgif from "../../../images/landing-downloadgif.gif";
import forkids from "../../../images/landing-pic4.png";

function About() {
  return (
    <div className="about border-bottom">
      <div className="container section_container">
        <section className="enjoy_tv about_section">
          <div className="text">
            <h2 className="title">Enjoy on your TV.</h2>
            <p className="subtitle">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="video_animation_container">
            <img src={imgtv} className="img-fluid tv-img" alt="tv" />
            <div className="gif-container">
              <video autoPlay={true} muted loop>
                <source src={videoanimation} />
              </video>
            </div>
          </div>
        </section>

        <section className="download_your_watch about_section">
          <div className="text">
            <h2 className="title">Download your shows to watch offline.</h2>
            <p className="subtitle">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
          <div className="download_animation_container img">
            <img src={mobile} className="img-fluid mobile-img" alt="mobile" />
            <div className="download_animation even-div">
              <div className="download_animation-left">
                <img src={boxpic} className="img-fluid" alt="image" />
              </div>

              <div className="download_animation-center">
                <p className="strangerThings_text">Stranger Things</p>
                <p className="download_text">Downloading...</p>
              </div>

              <div className="download_animation-right">
                <img
                  src={downloadgif}
                  className="img-fluid"
                  alt="download gif"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="watch_anywhere about_section">
          <div className="text">
            <h2 className="title">Watch everywhere.</h2>
            <p className="subtitle">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
        </section>

        <section className="for_kids about_section">
          <div className="text">
            <h2 className="title">Create profiles for kids.</h2>
            <p className="subtitle">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>

          <div className="img-container">
            <img src={forkids} className="img-fluid" alt="picture" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
