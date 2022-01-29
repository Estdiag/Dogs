import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogTemp } from "../../redux/actions/index";
import s from "./stylesFilter.module.css";

function FilterTemperament() {
  const temperaments = useSelector((state) => state.temperaments);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value !== null) {
      dispatch(getDogTemp(e.target.value));
    } else {
      return null;
    }
  };

  return (
    <div className={`${s.div}`}>
      <label>
        Filter by temperament
        <select onChange={handleChange} className={`${s.select}`}>
          <option>Select</option>
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
