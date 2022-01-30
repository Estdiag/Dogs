import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDogs, getDogTemp } from "../../redux/actions/index";
import s from "./stylesFilter.module.css";

function FilterTemperament() {
  const temperaments = useSelector((state) => state.temperaments);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value === "nothing") {
      dispatch(getAllDogs());
    }
    if (e.target.value !== "nothing") {
      dispatch(getDogTemp(e.target.value));
    }
  };

  return (
    <div className={`${s.div}`}>
      <label>
        Filter by temperament
        <select onChange={handleChange} className={`${s.select}`}>
          <option value="nothing">Select</option>
          {temperaments.map((t) => {
            return (
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
}

export default FilterTemperament;
