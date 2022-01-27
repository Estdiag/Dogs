import React from "react";
import AllDog from "../allDogs/AllDog.jsx";
import OrderName from "../order/OrderName.jsx";
import OrderWeight from "../order/OrderWeight.jsx";
import FilterTemperament from "../filter/FilterTemperament.jsx";
import FilterData from "../filter/FilterData.jsx";
import NavBar from "../navBar/NavBar.jsx";
import "./stylesHome.modules.css";

function Home() {
  return (
    <>
      <NavBar />
      <FilterTemperament />
      <FilterData />
      <OrderName />
      <OrderWeight />
      <AllDog />
    </>
  );
}

export default Home;
