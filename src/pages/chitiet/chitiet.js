import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getchitiet } from "../../api/Api";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/loading";
import "./chitiet.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Chitiet = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();
  const [chitiet, setChitiet] = useState(null);
  const [categoryNames, setCategoryNames] = useState([]);
  const [countryNames, setCountryNames] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);
  
  const getEmbedUrl = (url) => {
    const videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    return ampersandPosition !== -1 ? videoId.substring(0, ampersandPosition) : videoId;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getchitiet(slug);
        setChitiet(data.chitiet);
        setCategoryNames(data.category.map((cat) => cat.name));
        setCountryNames(data.country.map((cou) => cou.name));
      } catch (error) {
        console.error("Error fetching chitiet:", error);
        setError("Failed to fetch details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="load">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <p>{error}</p>
        <button className="btn" onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <div
        className="chitiet"
        style={{
          backgroundImage: `url(${chitiet.thumb_url})`,
        }}
      >
        <div className="chitiet__poster">
          <img src={chitiet.poster_url} alt={chitiet.name} />
          <Link to={`/movie/chitietphim/watch/${chitiet.slug}`}>
            <p className="chitiet_poster_content">XEM PHIM</p>
          </Link>
        </div>
        <div className="chitiet__info">
          <h1>{chitiet.name}</h1>
          {chitiet.trailer_url && (
            <div className="trailer">
              <button className="btn trailer-btn" onClick={() => setShowTrailer(!showTrailer)}>
                {showTrailer ? "Close Trailer" : "Trailer"}
              </button>
              {showTrailer && (
                <iframe className="iframe"
                  title="YouTube Video"
                  width="400"
                  height="200"
                  src={`https://www.youtube.com/embed/${getEmbedUrl(chitiet.trailer_url)}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          )}
          <div className="P1">
            <p>Trạng thái: </p>
            <p>{chitiet.episode_current}</p>
          </div>
          <div className="P1">
            <p>Số tập: </p>
            <p>{chitiet.episode_total}</p>
          </div>
          <div className="P1">
            <p>Thời lượng: </p>
            <p>{chitiet.time}</p>
          </div>
          <div className="P1">
            <p>Năm phát hành: </p>
            <p>{chitiet.year}</p>
          </div>
          <div className="P1">
            <p>Chất lượng: </p>
            <p>{chitiet.quality}</p>
          </div>
          <div className="P1">
            <p>Ngôn ngữ: </p>
            <p>{chitiet.lang}</p>
          </div>
          <div className="P1">
            <p>Thể Loại: </p>
            <p>{categoryNames.join(", ")}</p>
          </div>
          <div className="P1">
            <p>Đạo diễn: </p>
            <p>{chitiet.director}</p>
          </div>
          <div className="P1">
            <p>Diễn viên:</p>
            <p>{chitiet.actor.join(", ")}</p>
          </div> 
          <div className="P1">
            <p>Quốc gia: </p>
            <p>{countryNames.join(", ")}</p>
          </div>
        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div><img src={chitiet.poster_url} alt={chitiet.name} /></div>
          <div><img src={chitiet.poster_url} alt={chitiet.name} /></div>
          <div><img src={chitiet.poster_url} alt={chitiet.name} /></div>
        </Slider>
      </div>
    </div>
  );
};

export default Chitiet;
