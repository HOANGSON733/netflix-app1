/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "./carousel.css";
import { fetchPopularMovies } from "../../api/Api";
import { Link } from "react-router-dom";

const Banner = () => {
  const [movies, setPhimCapNhat] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { movies } = await fetchPopularMovies();
        setPhimCapNhat(movies);
        console.log("movies:", movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [movies]);

  return (
    <div className="slideshow-container">
      {movies ? (
        movies.map((item, index) => (
          <div
            className={`mySlides fade ${index === slideIndex ? "active" : ""}`}
            key={item.id || index} // Use a unique key
          >
            <img
              src={`${item.thumb_url}`}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "100%" }}
            />
            <div className="text">
              <h1>welcome</h1>
              <p>
                Millions of movies, TV shows and people to discover. Explore
                now.
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className={`mySlides`}>
          <img
            src={`./v5XyXZe8FADw8iHupB4L7QOAwH9.jpg`}
            style={{ width: "100%", height: "100%" }}
          />
          <div className="text">
            <h1>welcome .</h1>
            <p>
              Millions of movies, TV shows and people to discover. Explore now.
            </p>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Banner;
