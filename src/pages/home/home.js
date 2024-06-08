/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import {
  fetchPopularMovies,
  getphimhoathinh,
  getphimle,
  getTvShow,
  getphimbo,
} from "../../api/Api";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import Carousel from "../../components/carousel/carousel";
import Loading from './../../components/loading/loading';

// Tạo component NextArrow
const NextArrow = ({ onClick }) => (
  <div className="next-arrow arrow" onClick={onClick}>
    <FaChevronCircleRight />
  </div>
);

// Tạo component PrevArrow
const PrevArrow = ({ onClick }) => (
  <div className="prev-arrow arrow" onClick={onClick}>
    <FaChevronCircleLeft />
  </div>
);

const PopularMoviesPage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [phimle, setphimle] = useState([]);
  const [phimbo, setphimbo] = useState([]);
  const [hoathinh, sethoathinh] = useState([]);
  const [TvShow, setTvShow] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { movies } = await fetchPopularMovies();
        setPopularMovies(movies);
        console.log("Check >>>", movies);

        const { phimle } = await getphimle();
        setphimle(phimle);
        console.log("Check >>>11", phimle);

        const { phimbo } = await getphimbo();
        setphimbo(phimbo);
        console.log("Check >>>11", phimbo);

        const { hoathinh } = await getphimhoathinh();
        sethoathinh(hoathinh);
        console.log("Check >>>12", hoathinh);

        const { TvShow } = await getTvShow();
        setTvShow(TvShow);
        console.log("Check >>>13", TvShow);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };
    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>{popularMovies.length>0 && phimle.length>0 && hoathinh.length>0 && TvShow.length>0 ? (
      <div>
<<<<<<< HEAD
        <div>
          <Carousel />
        </div>
        <div className="list">
          <h1><i class="fa-solid fa-clapperboard"></i> Phim Mới Cập Nhật</h1>
          <Slider {...settings}>
            {popularMovies.map((movie) => (
              <div key={movie.id} className="movie">
                <div className="movie_img">

                  <Link to={`/movie/chitiet/${movie.slug}`}>
                    <img src={`${movie.poster_url}`} alt={movie.name} />

                  </Link>
                  {movie.tiem}
                </div>
                <div>
                  <h2 className="an">
                    <Link to={`/movie/chitiet/${movie.slug}`}>{movie.name}</Link>
                  </h2>
                </div>
=======
        <Carousel />
      </div>
      <div className="list">
        <Link to="/new-movies" className="link">
          <h1>
            Phim Mới Cập Nhật <FaChevronRight className="iconright" />
          </h1>
        </Link>
        <Slider {...settings}>
          {popularMovies.map((movie) => (
            <div key={movie.id} className="movie">
              <div className="movie_img">
                <Link to={`/movie/chitiet/${movie.slug}`}>
                  <img src={`${movie.poster_url}`} alt={movie.name} />
                </Link>
                {movie.tiem}
              </div>
              <div>
                <h2 className="an">
                  <Link to={`/movie/chitiet/${movie.slug}`}>{movie.name}</Link>
                </h2>
              </div>
            </div>
          ))}
        </Slider>
        <Link to="/movie/phim-le" className="link">
          <h1>
            Phim Lẻ <FaChevronRight className="iconright" />
          </h1>
        </Link>
        <Slider {...settings}>
          {phimle.map((movie) => (
            <div key={movie.id} className="movie">
              <div className="movie_img">
                <Link to={`/movie/chitiet/${movie.slug}`}>
                  <img
                    src={`https://img.phimapi.com/${movie.poster_url}`}
                    alt={movie.name}
                  />
                </Link>
              </div>
              <div>
                <h2 className="an">
                  <Link to={`/movie/chitiet/${movie.slug}`}>{movie.name}</Link>
                </h2>
              </div>
            </div>
          ))}
        </Slider>
        <Link to="/movie/phim-bo" className="link">
          <h1>
            Phim Bộ <FaChevronRight className="iconright" />
          </h1>
        </Link>
        <Slider {...settings}>
          {phimbo.map((movie) => (
            <div key={movie.id} className="movie">
              <div className="movie_img">
                <Link to={`/movie/chitiet/${movie.slug}`}>
                  <img
                    src={`https://img.phimapi.com/${movie.poster_url}`}
                    alt={movie.name}
                  />
                </Link>
              </div>
              <div>
                <h2 className="an">
                  <Link to={`/movie/chitiet/${movie.slug}`}>{movie.name}</Link>
                </h2>
              </div>
            </div>
          ))}
        </Slider>
        <br />
        <Link to="/movie/hoat-hinh" className="link">
          <h1>
            Phim Hoạt Hình <FaChevronRight className="iconright" />
          </h1>
        </Link>
        <Slider {...settings}>
          {hoathinh.map((movie) => (
            <div key={movie.id} className="movie">
              <div className="movie_img">
                <Link to={`/movie/chitiet/${movie.slug}`}>
                  <img
                    src={`https://img.phimapi.com/${movie.poster_url}`}
                    alt={movie.name}
                  />
                </Link>
              </div>
              <div>
                <h2 className="an">
                  <Link to={`/movie/chitiet/${movie.slug}`}>{movie.name}</Link>
                </h2>
              </div>
            </div>
          ))}
        </Slider>

        <Link to="/danh-sach/tv-shows" className="link">
          <h1>
            TV Show <FaChevronRight className="iconright" />
          </h1>
        </Link>
        <Slider {...settings}>
          {TvShow.map((movie) => (
            <div key={movie.id} className="movie">
              <div className="movie_img">
                <Link to={`/movie/chitiet/${movie.slug}`}>
                  <img
                    src={`https://img.phimapi.com/${movie.poster_url}`}
                    alt={movie.name}
                  />
                </Link>
>>>>>>> 1da3e5217be024edcabf8ee38c48e4195cfe4f63
              </div>
            ))}

          </Slider>
          <h1><i class="fa-solid fa-clapperboard"></i> Phim Lẻ</h1>
          <Slider {...settings}>
            {phimle.map((movie) => (
              <div key={movie.id} className="movie">
                <div className="movie_img">
                  <Link to={`/movie/chitiet/${movie.slug}`}>
                    <img
                      src={`https://img.phimapi.com/${movie.poster_url}`}
                      alt={movie.name}
                    />
                  </Link>
                </div>
                <div>
                  <h2 className="an">
                    <Link to={`/movie/chitiet/${movie.slug}`}>{movie.name}</Link>
                  </h2>
                </div>
              </div>
            ))}
          </Slider>
          <br />
          <h1><i class="fa-solid fa-clapperboard"></i> Phim Hoạt Hình</h1>
          <Slider {...settings}>
            {hoathinh.map((movie) => (
              <div key={movie.id} className="movie">
                <div className="movie_img">
                  <Link to={`/movie/chitiet/${movie.slug}`}>
                    <img
                      src={`https://img.phimapi.com/${movie.poster_url}`}
                      alt={movie.name}
                    />
                  </Link>
                </div>
                <div>
                  <h2 className="an">
                    <Link to={`/movie/chitiet/${movie.slug}`}>{movie.name}</Link>
                  </h2>
                </div>
              </div>
            ))}
          </Slider>

          <h1><i class="fa-solid fa-clapperboard"></i> TvShow</h1>
          <Slider {...settings}>
            {TvShow.map((movie) => (
              <div key={movie.id} className="movie">
                <div className="movie_img">
                  <Link to={`/movie/chitiet/${movie.slug}`}>
                    <img
                      src={`https://img.phimapi.com/${movie.poster_url}`}
                      alt={movie.name}
                    />
                  </Link>
                </div>
                <div>
                  <h2 className="an">
                    <Link to={`/movie/chitiet/${movie.slug}`}>{movie.name}</Link>
                  </h2>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
<<<<<<< HEAD
    ) : (
      <Loading />
    )}

    </>
=======
    </div>
>>>>>>> 1da3e5217be024edcabf8ee38c48e4195cfe4f63
  );
};

export default PopularMoviesPage;
