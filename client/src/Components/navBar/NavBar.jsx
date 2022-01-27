import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search/SearchBar.jsx";

function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/home"> Home </Link>
        <Link to="/create"> Registrar un nuevo perro </Link>
        <SearchBar />
      </nav>
    </div>
  );
}

export default NavBar;
