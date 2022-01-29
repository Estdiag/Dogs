import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../search/SearchBar.jsx";
import s from "./stylesNav.module.css";
import dog from "./dog.jpg";
import out from "./out.png";

function NavBar() {
  return (
    <div className={`${s.nav}`}>
      <nav>
        <Link to="/create" className={`${s.nav}`}>
          Add a new dog
        </Link>
        <div>
          <img className={`${s.img}`} src={dog} alt="" />
        </div>
        <div>
          <Link to="/">
            <img className={`${s.out}`} src={out} alt="dog" />
          </Link>
        </div>
      </nav>
      <SearchBar />
    </div>
  );
}

export default NavBar;
