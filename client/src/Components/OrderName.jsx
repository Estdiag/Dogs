import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../redux/actions";

export default function OrderName() {
  const data = useSelector((state) => state.dogs);
  const dispatch = useDispatch();

  const selectChange = (e) => {
    e.preventDefault();
    if (e.target.value === "handleFilterAsc") {
      const ascendente = data.sort(function (a, b) {
        var textA = a.name;
        var textB = b.name;
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });

      dispatch(filter(ascendente));
    } else if (e.target.value === "handleFilterDes") {
      const ascendente = data.sort(function (a, b) {
        var textA = a.name;
        var textB = b.name;
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });

      let descendente = ascendente.reverse();
      dispatch(filter(descendente));
    } else return null;
  };

  return (
    <div>
      <label>
        Ordenar por nombre
        <select onChange={selectChange}>
          <option value={"nothing"}>Seleccionar</option>
          <option value={"handleFilterAsc"}>A-Z</option>
          <option value={"handleFilterDes"}>Z-A</option>
        </select>
      </label>
    </div>
  );
}
