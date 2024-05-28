/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
// import "./phimle.css";
import { Link } from "react-router-dom";

import { getphimle } from "../../api/Api";
import Loading from "../../components/loading/loading";

const Phimle = () => {
  const [phimle, setPhimLe] = useState(null);
  

  const handleClick = async () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const { phimle } = await getphimle();
      setPhimLe(phimle);
      console.log("PhimLe:", phimle);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  useEffect(() => {
    handleClick(1);
  }, []);

  return (
    <div>
      {phimle ? (
        <div className="film_component">
          <div className="category">Phim Lẻ</div>
          <div className="list">
            {phimle &&
              phimle.map((movie) => (
                <div key={movie.id} className="movie">
                  <Link to={`/movie/detailsmovie/${movie.slug}`}>
                    <img
                      src={`https://img.phimapi.com/${movie.poster_url}`}
                      alt={movie.title}
                    />
                  </Link>
                  <div className="year">
                    <p>{movie.year}</p>
                  </div>
                  <div className="title">
                    <Link to={`/movie/detailsmovie/${movie.slug}`}>
                      {movie.name}
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default Phimle;
