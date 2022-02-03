import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDog } from "../../redux/actions/index";
import s from "./stylesSearch.module.css";

function SearchBar() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const [name, setName] = useState("");
  const [err, setErr] = useState("");

  const handleErr = () => {
    if (allDogs.length > 170) setErr("No found");
    else {
      setErr("");
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getDog(name));
    handleErr();
    setName("");
  };

  return (
    <div className={`${s.searchbar}`}>
      <input value={name} onChange={(e) => handleInputChange(e)} />
      <button onClick={(e) => handleSubmit(e)}>Search</button>
      <span> {err}</span>
    </div>
  );
}

export default SearchBar;
