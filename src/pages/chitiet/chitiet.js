import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getchitiet } from "../../api/Api";
import "./chitiet.css";
import { Link } from "react-router-dom";

const Chitiet = () => {
  const { slug } = useParams();
  const [chitiet, setChitiet] = useState(null);
  const [categoryNames, setCategoryNames] = useState([]);
  const [countryNames, setCountryNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getchitiet(slug);
        setChitiet(data.chitiet);
        setCategoryNames(data.category.map((cat) => cat.name));
        setCountryNames(data.country.map((cou) => cou.name));
      } catch (error) {
        console.error("Error fetching chitiet:", error);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <div className="container">
      {chitiet ? (
        <>
          <div className="chitiet">
            <div className="chitiet__poster">
              <img src={chitiet.poster_url} alt={chitiet.name} />
              <p className="chitiet_poster_content">XEM PHIM</p>
            </div>
            <div className="chitiet__info">
              <div className="buttons">
                <Link to={`/movie/chitietphim/watch/${chitiet.slug}`}>
                  <button>
                    Xem Phim <i className="fa-solid fa-play fa-shake"></i>
                  </button>
                </Link>
              </div>
              <h1>{chitiet.name}</h1>
              <p>Trạng thái: {chitiet.episode_current}</p>
              <p>Số tập: {chitiet.episode_total}</p>
              <p>Thời lượng: {chitiet.time / 60} phút</p>
              <p>Năm phát hành: {chitiet.year}</p>
              <p>Chất lượng: {chitiet.quality}</p>
              <p>Ngôn ngữ: {chitiet.lang}</p>
              <p>Đạo diễn: {chitiet.director}</p>
              <p>
                Diễn viên:{" "}
                {chitiet.actor.map((actor, index) => (
                  <React.Fragment key={index}>
                    {actor}
                    {index < chitiet.actor.length - 1 ? ", " : ""}
                  </React.Fragment>
                ))}
              </p>
              <p>
                Thể Loại:{" "}
                {categoryNames.map((category, index) => (
                  <React.Fragment key={index}>
                    {category}
                    {index < categoryNames.length - 1 ? ", " : ""}
                  </React.Fragment>
                ))}
              </p>
              <p>Quốc gia: {countryNames.join(", ")}</p>
            </div>
          </div>
          <div className="additional-info">
            <div>Thông Tin phim</div>
            <div>Trailer</div>
            <div>Hình ảnh</div>
          </div>
        </>
      ) : (
        <div className="loading-spinner"></div>
      )}
    </div>
  );
};

export default Chitiet;
