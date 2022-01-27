import React from "react";
import { useDispatch } from "react-redux";
import { getDogsApi, getDogsDb } from "../../redux/actions/index";

function FilterData() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value === "api") {
      dispatch(getDogsApi());
    } else if (e.target.value === "db") {
      dispatch(getDogsDb());
    }
  };
  return (
    <div>
      <label>
        Filtrar por proviene data
        <select onChange={(e) => handleChange(e)}>
          <option>Seleccionar</option>
          <option value={"api"}>Api</option>
          <option value={"db"}>DB</option>
        </select>
      </label>
    </div>
  );
}

export default FilterData;
