import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIdDog } from "../redux/actions/index";
import { Link, useParams } from "react-router-dom";

export default function DogDetails() {
  const dispatch = useDispatch();

  const { Id } = useParams();

  const dog = useSelector((state) => state.dog);

  useEffect(() => {
    dispatch(getIdDog(Id));
  }, []);

  return (
    <>
      <img src={dog.img} alt={`imagen de un ${dog.name}`} />
      <h1> {dog.name}</h1>
      <h2>Temperamento: {dog.temperament}</h2>
      <h2>
        Peso: {dog.weightMin} - {dog.weightMax} KG
      </h2>
      <h2>
        Altura: {dog.heightMin} - {dog.heightMax} M
      </h2>
      <h2>
        Tiempo de vida: {dog.lifeSpanMin} - {dog.lifeSpanMax}
      </h2>
      <Link to="/home">
        <button>Atras</button>
      </Link>
    </>
  );
}
