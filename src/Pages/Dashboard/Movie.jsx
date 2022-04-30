import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../request";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";

function Movie() {
  const imgUrl = "https://image.tmdb.org/t/p/original/";
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  async function getMovie() {
    const request = await axios.get(`movie/${id}?api_key=${requests.API_KEY}`);
    setMovie(request.data);
  }
  useEffect(() => {
    getMovie();
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="dashboard">
      <Header />
      <div className="movie-info">
        <div className="container">
          <div className="img-container">
            <img
              src={`${imgUrl}${movie?.poster_path}`}
              className="img-fluid"
              alt={movie.title}
            />
          </div>

          <div className="details-container">
            <div className="details">
              <span>title</span>
              <h1 className=" details-title">{movie?.title}</h1>
            </div>
            <div className="details">
              <span>release date</span>
              <p className="details-date">{movie?.release_date}</p>
            </div>

            <div className="details">
              <span>runtime</span>
              <p className="details-date">{movie?.runtime} minutes</p>
            </div>
            <div className="details">
              <span>overview</span>
              <p className="details-overview">{movie?.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">x</div>
    </div>
  );
}

export default Movie;
