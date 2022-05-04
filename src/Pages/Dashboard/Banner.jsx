import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../request";
import { Link } from "react-router-dom";

function Banner() {
  const imgUrl = "https://image.tmdb.org/t/p/original/";

  const [movie, setMovie] = useState([]);
  const [mylist, setMylist] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTopRated);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div className="featured">
      <div className="featured-img">
        <img src={`${imgUrl}${movie?.backdrop_path}`} alt={movie?.title} />
      </div>

      <div className="featured-text">
        <div className="container">
          <div className="details">
            <h1 className="title">
              {movie?.name || movie?.title || movie?.orginal_name}
            </h1>
            <p className="desc">{truncate(movie?.overview, 200)}</p>
            <div className="btns-container">
              <Link to={`/dashboard/movie/${movie?.id}`}>
                <button className="watch-btn btn">
                  <i className="fa-solid fa-eye"></i>Details
                </button>
              </Link>
              <button className="add-btn btn">
                <i className="fa-regular fa-heart"></i>My List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
