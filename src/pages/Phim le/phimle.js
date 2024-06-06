import React, { useEffect, useState } from "react";
import "./phimle.css";
import { Link } from "react-router-dom";
import { getphimle, fetchPopulartheloai } from "../../api/Api";
import Loading from "../../components/loading/loading";

const Phimle = () => {
  const [phimle, setPhimLe] = useState([]);
  const [theloai, setTheLoai] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { phimle } = await getphimle();
      const { theloai } = await fetchPopulartheloai();
      setPhimLe(phimle);
      setTheLoai(theloai);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter movies based on search term and selected genre
  const filteredMovies = phimle.filter((movie) => {
    return (
      movie.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedGenre === "" || movie.genre.includes(selectedGenre))
    );
  });

  // Get current movies based on pagination
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {loading ? (
        <div className="loading1">
        <Loading />
        </div>
      ) : (
        <div className="film_component">
          <div className="category2">Phim Lẻ</div>
          <div className="film_componet_loc"> 
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
          <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} className="filter-select">
            <option value="">Phim</option>
            {theloai.map((genre) => (
              <option key={genre.id} value={genre.name}>{genre.name}</option>
            ))}
          </select>
          <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} className="filter-select">
            <option value="">All Genres</option>
            {theloai.map((genre) => (
              <option key={genre.id} value={genre.name}>{genre.name}</option>
            ))}
          </select>
          <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} className="filter-select">
            <option value="">Year</option>
            {theloai.map((genre) => (
              <option key={genre.id} value={genre.name}>{genre.name}</option>
            ))}
          </select>
          <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} className="filter-select">
            <option value="">Quốc gia</option>
            {theloai.map((genre) => (
              <option key={genre.id} value={genre.name}>{genre.name}</option>
            ))}
          </select>
          <button className="button">Lọc Phim</button>    
          </div>
          <div className="list2">
            {currentMovies.map((movie) => (
              <div key={movie.id} className="movie2">
                <Link to={`/movie/chitiet/${movie.slug}`}>
                  <img
                    src={`https://img.phimapi.com/${movie.poster_url}`}
                    alt={movie.title}
                  />
                </Link>
                <div className="year">
                  <p>{movie.year}</p>
                </div>
                <div className="title2">
                  <Link to={`/movie/chitiet/${movie.slug}`}>
                    {movie.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            moviesPerPage={moviesPerPage}
            totalMovies={filteredMovies.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      )}
    </div>
  );
};

const Pagination = ({ moviesPerPage, totalMovies, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${currentPage === number ? "active" : ""}`}>
            <a onClick={() => paginate(number)} href="#!" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Phimle;