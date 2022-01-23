import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDog } from "../redux/actions/index";

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getDog(name));
    setName("");
  };

  return (
    <div>
      <input
        type={"text"}
        placeholder="Buscar..."
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
