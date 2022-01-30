import React from "react";
import { useDispatch } from "react-redux";
import { getAllDogs, getDogsApi, getDogsDb } from "../../redux/actions/index";
import s from "./stylesFilter.module.css";

function FilterData() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value === "api") {
      dispatch(getDogsApi());
    } else if (e.target.value === "db") {
      dispatch(getDogsDb());
    } else {
      dispatch(getAllDogs());
    }
  };
  return (
    <div className={`${s.div}`}>
      <label>
        The data comes from:
        <select className={`${s.select}`} onChange={(e) => handleChange(e)}>
          <option>Select</option>
          <option value={"api"}>Api</option>
          <option value={"db"}>DB</option>
        </select>
      </label>
    </div>
  );
}

export default FilterData;
