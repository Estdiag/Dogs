import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIdDog } from "../../redux/actions/index";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../navBar/NavBar";

import s from "./stylesDetails.module.css";

export default function DogDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { Id } = useParams();

  const dog = useSelector((state) => state.dog);

  useEffect(() => {
    dispatch(getIdDog(Id));
  }, []);

  return (
    <div>
      <NavBar />
      <div className={`${s.container}`}>
        <button
          className={`${s.button}`}
          onClick={() => {
            navigate("/home");
          }}
        >
          X
        </button>

        <img src={dog.img} alt={`imag ${dog.name}`} className={`${s.img}`} />
        <h1 className={`${s.img}`}> {dog.name}</h1>
        <p>
          <b>Temperaments:</b> {dog.temperament}
        </p>
        <p>
          <b>Weigth:</b> {dog.weightMin} - {dog.weightMax} KG
        </p>
        <p>
          <b>Heigth:</b> {dog.heightMin} - {dog.heightMax} CM
        </p>
        <p>
          <b>Life span:</b> {dog.lifeSpanMin} - {dog.lifeSpanMax}
        </p>
      </div>
    </div>
  );
}
