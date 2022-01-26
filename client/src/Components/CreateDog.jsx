import React, { useState, useEffect } from "react";
import { createDog, getTemperaments } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import { Link } from "react-router-dom";

const CreateDog = () => {
  let dispatch = useDispatch();
  const AllTemperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  let [state, setState] = useState({
    name: "",
    weightMin: "",
    weightMax: "",
    heightMin: "",
    heightMax: "",
    lifeSpanMin: "",
    lifeSpanMax: "",
    img: "",
    temperament: [],
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const loadTemperament = (e) => {
    let temperaments = [...state.temperament];
    if (!temperaments.includes(e.target.value)) {
      temperaments.push(e.target.value);
      setState({ ...state, temperament: temperaments });
    } else return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDog(state));
  };

  return (
    <div>
      <form>
        <Form
          label="Name"
          placeholder="Name"
          type="text"
          value={state.name}
          name="name"
          onChange={(e) => handleChange(e)}
        />
        <Form
          label="Mixinum weight"
          placeholder="mixinum weight"
          type="number"
          value={state.weightMin}
          name="weightMin"
          onChange={(e) => handleChange(e)}
        />
        <Form
          label="Mixinum weight"
          placeholder="mixinum weight"
          type="number"
          value={state.weightMax}
          name="weightMax"
          onChange={(e) => handleChange(e)}
        />
        <Form
          label="Minimun height "
          placeholder="Minimun height"
          type="number"
          name="heightMin"
          value={state.heightMin}
          onChange={(e) => handleChange(e)}
        />
        <Form
          label="Maximum height"
          placeholder="maximum height"
          type="number"
          value={state.heightMax}
          name="heightMax"
          onChange={(e) => handleChange(e)}
        />

        <Form
          label="Life span min"
          placeholder="life span min"
          type="number"
          value={state.lifeSpanMin}
          name="lifeSpanMin"
          onChange={(e) => handleChange(e)}
        />
        <Form
          label="Life span max"
          placeholder="life span max"
          type="number"
          value={state.lifeSpanMax}
          name="lifeSpanMax"
          onChange={(e) => handleChange(e)}
        />
        <label>
          Temperaments
          <select
            onChange={loadTemperament}
            value={state.temperament}
            name="temperament"
          >
            <option>Select</option>
            {AllTemperaments.map((t) => {
              return (
                <option key={t.id} value={t.temperament}>
                  {t.name}
                </option>
              );
            })}
          </select>
        </label>

        <Form
          label="Image"
          placeholder="image"
          type="text"
          value={state.img}
          name="img"
          onChange={(e) => handleChange(e)}
        />
        <Link to="/home">
          <button>Cancelar</button>
        </Link>
        <button onClick={handleSubmit}>Crear</button>
      </form>
    </div>
  );
};

export default CreateDog;
