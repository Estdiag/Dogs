import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { order } from "../../redux/actions/index";

function OrderWeight() {
  const data = useSelector((state) => state.dogs);
  const dispatch = useDispatch();

  const selectChange = (e) => {
    e.preventDefault();
    if (e.target.value === "handleFilterhigher") {
      const higher = data.sort(function (a, b) {
        var weightA = a.weightMax;
        var weightB = b.weightMax;
        return weightA < weightB ? -1 : weightA > weightB ? 1 : 0;
      });
      dispatch(order(higher.reverse()));
    } else if (e.target.value === "handleFilterLess") {
      const less = data.sort(function (a, b) {
        var weightA = a.weightMin;
        var weightB = b.weightMin;
        return weightA < weightB ? -1 : weightA > weightB ? 1 : 0;
      });
      dispatch(order(less));
    } else return null;
  };

  return (
    <>
      <label>
        Ordenar por peso
        <select onChange={selectChange}>
          <option value={"nothing"}>Seleccionar</option>
          <option value={"handleFilterhigher"}>Mas pesados</option>
          <option value={"handleFilterLess"}>Menos pesados</option>
        </select>
      </label>
    </>
  );
}

export default OrderWeight;
