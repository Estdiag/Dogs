import React from "react";
import s from "./styleCard.module.css";
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
  const temp = [];
  temperaments?.map((t) => temp.push(t.name));
  let temps = temp.toString();
  console.log(temps);
  console.log(temperament);
  return (
    <div className={`${s.card}`}>
      <img src={img} alt="img" />
      <Link to={`/dogDetail/${Id}`} className={`${s.h1}`}>
        <h1 className={`${s.h1}`}> {name}</h1>
      </Link>
      <p>
        <b>Temperaments: </b>
        {temperament ? temperament : temps}
      </p>
      <p>
        <b>Weight:</b> {weightMin} - {weightMax}
      </p>
    </div>
  );
}
