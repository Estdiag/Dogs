import React from "react";
import AllDog from "../allDogs/AllDog.jsx";
import SortName from "../sort/SortName.jsx";
import SortWeight from "../sort/SortWeight.jsx";
import FilterTemperament from "../filter/FilterTemperament.jsx";
import FilterData from "../filter/FilterData.jsx";
import NavBar from "../navBar/NavBar.jsx";
import s from "./stylesHome.module.css";
import { useDispatch } from "react-redux";
import { getAllDogs } from "../../redux/actions/index.js";

function Home() {
  return (
    <div className={`${s.contenedor}`}>
      <NavBar />
      <div className={`${s.div}`}>
        <FilterTemperament />
        <FilterData />
      </div>

      <div>
        <SortName />
        <SortWeight />
      </div>

      <AllDog />
    </div>
  );
}

export default Home;
