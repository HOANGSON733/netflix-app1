<<<<<<< HEAD
=======
// `// eslint-disable jsx-a11y/alt-text `
>>>>>>> 1da3e5217be024edcabf8ee38c48e4195cfe4f63
import React, { useEffect, useState } from "react";
import "./carousel.css";
import { fetchPopularMovies } from "../../api/Api";

const Banner = () => {
  const [movies, setPhimCapNhat] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [keyword, setKeyword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      window.location.href = `/movie/search/keyword/${keyword}`;
    }
  };

  const handleClear = () => {
    setKeyword('');
  };

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
            key={item.id || index}
          >
            <img
              src={`${item.thumb_url}`}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "100%" }}
            />
            <div className="text">
<<<<<<< HEAD
              <h1>Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác</h1>
              <p>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</p>
              <div className="search-carousel">
                <form onSubmit={handleSubmit}>
                  <input
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Tìm kiếm phim"
                  />
                  <button type="submit">Tìm kiếm <i className="fa-solid fa-angle-right"></i></button>
                </form>
              </div>
=======
              <h1>welcome</h1>
              <p>
                Millions of movies, TV shows and people to discover. Explore
                now.
              </p>
>>>>>>> 1da3e5217be024edcabf8ee38c48e4195cfe4f63
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Banner;
