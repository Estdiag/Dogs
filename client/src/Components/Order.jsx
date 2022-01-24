import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../redux/actions";

export default function Order() {
  const data = useSelector((state) => state.dogs);
  const dispatch = useDispatch();

  const handleFilterAsc = () => {
    const ascendente = data.sort(function (a, b) {
      var textA = a.name;
      var textB = b.name;
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

    dispatch(filter(ascendente));
  };

  const handleFilterDes = () => {
    const ascendente = data.sort(function (a, b) {
      var textA = a.name;
      var textB = b.name;
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

    let descendente = ascendente.reverse();
    dispatch(filter(descendente));
  };

  return (
    <div>
      <label>
        Ordenar de forma:
        <button onClick={handleFilterAsc}>Ascendente</button>
        <button onClick={handleFilterDes}>Descendente</button>
      </label>
    </div>
  );
}
