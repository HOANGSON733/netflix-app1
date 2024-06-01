/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
// import "./phimle.css";
import { Link } from "react-router-dom";

import { getphimhoathinh } from "../../api/Api";
import Loading from "../../components/loading/loading";

const PhimHoatHinh = () => {
  const [hoathinh, setHoatHinh] = useState(null);
  

  const handleClick = async () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const { hoathinh } = await getphimhoathinh();
      setHoatHinh(hoathinh);
      console.log("hoathinh:", hoathinh);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  useEffect(() => {
    handleClick(1);
  }, []);

  return (
    <div>
      {hoathinh ? (
        <div className="film_component">
          <div className="category">Phim Lẻ</div>
          <div className="list">
            {hoathinh &&
              hoathinh.map((movie) => (
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
        <Loading></Loading>
      )}
    </div>
  );
};

export default PhimHoatHinh;
