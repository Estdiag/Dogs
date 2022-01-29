import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDog } from "../../redux/actions/index";
import s from "./stylesSearch.module.css";

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getDog(name));
    setName("");
  };

  return (
    <div className={`${s.searchbar}`}>
      <input value={name} onChange={(e) => handleInputChange(e)} />
      <button onClick={(e) => handleSubmit(e)}>Search</button>
    </div>
  );
}

export default SearchBar;
