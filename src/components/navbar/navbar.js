import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPopulartheloai } from "../../api/Api";
import { FiSearch } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };
  const [theloai, settheloai] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { theloai } = await fetchPopulartheloai();
        settheloai(theloai);
        console.log("Check >>>", theloai);
      } catch (error) {
        console.error("Error fetching popular theloai:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="navbar">
        <div className="navbar_item">
          <Link to="/">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar_item">
          <ul className="ul1">
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/news">Tin tức - Sự kiện</Link>
            </li>
            <li className="dropdown">
              <span className="dropbtn" onClick={handleDropdownClick}>
                Thể loại
                <FaChevronDown className="icon" />
              </span>
              {showDropdown && (
                <ul className="dropdown-content">
                  {Array.isArray(theloai) && theloai.length > 0 ? (
                    theloai.map((item) => (
                      <li key={item.id}>
                        <Link to="#">{item.name}</Link>
                      </li>
                    ))
                  ) : (
                    <p>Không có thể loại nào</p>
                  )}
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className="navbar_item search-input">
          <FiSearch className="icon1" />
          <input type="text" placeholder="Tìm kiếm..." />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
