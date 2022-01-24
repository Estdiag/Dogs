import React from "react";
import "./styles.module.css";
import { Link } from "react-router-dom";

export default function DogCard({
  Id,
  img,
  name,
  temperament,
  weightMin,
  weightMax,
  temperaments,
}) {
  return (
    <div className="card">
      <img src={img} alt="imagen de un perro" />
      <Link to={`/dogDetail/${Id}`}>
        <h1> {name}</h1>
      </Link>
      <h2>Temperamento: {temperament}</h2>
      <h2>
        Peso: {weightMin} - {weightMax}
      </h2>
    </div>
  );
}
