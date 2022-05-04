import React, { useState, useEffect } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Row from "./Row";
import MyList from "./Mylist";
import requests from "../../request";
// import { GET_MOVIES } from "../../request";

const addToMyList = (title) => {
  console.log(title);
};

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <Banner mylist={addToMyList} />

      <div className="movies_container">
        <div className="container">
          <MyList title="My List" mylist={addToMyList} />
          <Row title="Originals" fetchUrl={requests.fetchNetflixOriginals} />
          <Row title="Trending" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row title="Actions" fetchUrl={requests.fetchActionMovies} />
          <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
          <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
