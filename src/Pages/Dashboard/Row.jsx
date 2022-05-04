import React, { useEffect, useState } from "react";
import instance from "../../axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Youtube from "react-youtube";
import trailer from "movie-trailer";
import { Link } from "react-router-dom";

function Row({ title, fetchUrl }) {
  const imgUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [urlTrailer, setUrlTrailer] = useState("");

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    lazyLoad: true,
    slidesToShow: 7,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 399,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 499,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  useEffect(() => {
    //
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <div className="row-title">
        <h1>{title}</h1>
      </div>
      <div className="row-movies">
        <Slider {...settings}>
          {movies.map((movie) => {
            return (
              <div className="movie" key={movie.id}>
                <img src={`${imgUrl}${movie.poster_path}`} alt="movie" />

                <div className="details">
                  <Link to={`/dashboard/movie/${movie.id}`}>
                    <button
                      className="btn"
                      data-tooltip="View Details
                    "
                    >
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </Link>
                  <button className="btn" data-tooltip="Add to list">
                    <i className="fa-solid fa-heart"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Row;
