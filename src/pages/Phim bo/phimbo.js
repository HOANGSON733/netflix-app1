/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "./phimbo.css";
import { Link } from "react-router-dom";

import { getphimbo } from "../../api/Api";
import Loading from "../../components/loading/loading";

const Phimbo = () => {
  const [phimbo, setPhimbo] = useState(null);
  

  const handleClick = async () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const { phimbo } = await getphimbo();
      setPhimbo(phimbo);
      console.log("PhimLe:", phimbo);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  useEffect(() => {
    handleClick(1);
  }, []);

  return (
    <div>
      {phimbo ? (
        <div className="film_component">
          <div className="category">Phim Lẻ</div>
          <div className="list">
            {phimbo &&
              phimbo.map((movie) => (
                <div key={movie.id} className="movie">
                  <Link to={`/movie/chitiet/${movie.slug}`}>
                    <img
                      src={`https://img.phimapi.com/${movie.poster_url}`}
                      alt={movie.title}
                    />
                  </Link>
                  <div className="year">
                    <p>{movie.year}</p>
                  </div>
                  <div className="title">
                    <Link to={`/movie/chitiet/${movie.slug}`}>
                      {movie.name}
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="loading1">
        <Loading/></div>
      )}
    </div>
  );
};

export default Phimbo;
