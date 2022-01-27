import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogTemp } from "../../redux/actions/index";

function FilterTemperament() {
  const temperaments = useSelector((state) => state.temperaments);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(getDogTemp(e.target.value));
  };

  return (
    <>
      <label>
        Filtrar por temperamento
        <select onChange={handleChange}>
          <option>Seleccionar</option>
          {temperaments.map((t) => {
            return (
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            );
          })}
        </select>
      </label>
    </>
  );
}

export default FilterTemperament;
