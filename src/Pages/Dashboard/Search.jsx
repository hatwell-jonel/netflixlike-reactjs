import React, { useState, useEffect } from "react";
import instance from "../../axios";
import requests from "../../request";

function Search() {
  const imgUrl = "https://image.tmdb.org/t/p/original/";
  const [searchResult, setSearchResult] = useState([]);
  const [searchval, setSearchval] = useState("");
  const [showSearched, setShowSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    const request = await instance.get(
      `search/movie?api_key=${requests.API_KEY}&query=${searchval}`
    );
    setSearchResult(request.data.results);
    setShowSearched(true);
  };

  const searchWord = (e) => {
    setSearchval(e.target.value);
  };

  return (
    <>
      <form className="search_container" onSubmit={handleSearch}>
        <button className="d-md-none">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>

        <div className="search">
          <div className="input-group search_bar">
            <input
              type="text"
              className="form-control search_bar-input"
              id="search_movie"
              placeholder="Search..."
              value={searchval}
              onChange={searchWord}
            />
            <button
              className="btn search_bar-btn"
              type="button"
              onClick={handleSearch}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div
            className={`search_result ${
              searchval.length == 0 || searchval.trim() == ""
                ? "d-none"
                : "d-block"
            }`}
          >
            {searchResult.map((item) => {
              return (
                <a href={`/dashboard/movie/${item?.id}`} key={item.id}>
                  <div className="item">
                    <div className="item-img">
                      <img
                        src={`${imgUrl}${item.poster_path}`}
                        className="img-fluid"
                        alt="movie"
                      />
                    </div>
                    <div className="item-text">
                      <p>{item?.name || item?.title || item?.orginal_title}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </form>
    </>
  );
}

export default Search;

{
  /* <div className="item">
              <div className="item-img">
                <img
                  src={`${imgUrl}/cVn8E3Fxbi8HzYYtaSfsblYC4gl.jpg`}
                  className="img-fluid"
                  alt="movie"
                />
              </div>
              <div className="item-text">
                <p>movie name</p>
              </div>
            </div> */
}
