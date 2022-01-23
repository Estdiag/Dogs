import React from "react";
import "./styles.module.css";

export default function DogCard({ img, name, temperament, weigth }) {
  return (
    <div className="card">
      <img src={img} alt="imagen de un perro" />
      <h1>Raza: {name}</h1>
      <h2>Temperamento: {temperament}</h2>
      <h2>Peso: {weigth}</h2>
    </div>
  );
}
