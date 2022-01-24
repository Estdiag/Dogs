import React from "react";
import AllDog from "./AllDog.jsx";
import Order from "./Order.jsx";
import SearchBar from "./SearchBar.jsx";

function Home() {
  return (
    <>
      <h1>Estas en home</h1>
      <SearchBar />
      <Order />
      <AllDog />
    </>
  );
}

export default Home;
