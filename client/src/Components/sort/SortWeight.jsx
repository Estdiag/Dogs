import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sort } from "../../redux/actions/index";
import s from "./stylesSort.module.css";

function SortWeight() {
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
      dispatch(sort(higher.reverse()));
    } else if (e.target.value === "handleFilterLess") {
      const less = data.sort(function (a, b) {
        var weightA = a.weightMin;
        var weightB = b.weightMin;
        return weightA < weightB ? -1 : weightA > weightB ? 1 : 0;
      });
      dispatch(sort(less));
    } else return null;
  };

  return (
    <div className={`${s.div}`}>
      <label>
        Sort by weight
        <select onChange={selectChange} className={`${s.select}`}>
          <option value={"nothing"}>Select</option>
          <option value={"handleFilterhigher"}>heavier</option>
          <option value={"handleFilterLess"}>Thinner</option>
        </select>
      </label>
    </div>
  );
}

export default SortWeight;
