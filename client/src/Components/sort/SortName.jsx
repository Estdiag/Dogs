import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, sort } from "../../redux/actions/index";
import s from "./stylesSort.module.css";

export default function SortName() {
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

      dispatch(sort(ascendente));
    } else if (e.target.value === "handleFilterDes") {
      const ascendente = data.sort(function (a, b) {
        var textA = a.name;
        var textB = b.name;
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });

      let descendente = ascendente.reverse();
      dispatch(sort(descendente));
    } else dispatch(getAllDogs());
  };

  return (
    <div className={`${s.div}`}>
      <label>
        Sort by alphabet
        <select onChange={selectChange} className={`${s.select}`}>
          <option value={"nothing"}>Select</option>
          <option value={"handleFilterAsc"}>A-Z</option>
          <option value={"handleFilterDes"}>Z-A</option>
        </select>
      </label>
    </div>
  );
}
