import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-netflix.png";
import imgPlaceholder from "../../images/image-placeholder.png";

function Header() {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const activeMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    // return () => {
    //   window.addEventListener("scroll");
    // };
  }, []);

  return (
    <header className={show ? "header header-black" : "header"}>
      <div className="container">
        <Link to="/dashboard">
          <img src={logo} className="logo" alt="netflix" />
        </Link>

        <div className="profile" onClick={activeMenu}>
          <img src={imgPlaceholder} className="profile-img" alt="image" />

          <div className="setting">
            <button className="">
              <i className="fa-solid fa-angle-down"></i>
            </button>

            <ul
              className={menu ? "setting-menu setting-active" : "setting-menu"}
            >
              <li>Setting</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
