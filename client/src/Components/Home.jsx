import React from "react";
import AllDog from "./AllDog.jsx";
import OrderName from "./OrderName.jsx";
import SearchBar from "./SearchBar.jsx";
import OrderWeight from "./OrderWeight.jsx";
import { getAllDogs } from "../redux/actions/index";

function Home() {
  return (
    <>
      <h1>Estas en home</h1>
      <SearchBar />
      <OrderName />
      <OrderWeight />
      <AllDog />
    </>
  );
}

export default Home;
