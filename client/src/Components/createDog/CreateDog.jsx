import React, { useState, useEffect } from "react";
import {
  createDog,
  getTemperaments,
  getAllDogs,
} from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import { Link } from "react-router-dom";
import s from "./stylesCreate.module.css";
import { searchExis, remove, validate, changeName } from "./functionCreate";

const CreateDog = () => {
  let obj = {
    name: "",
    weightMin: "",
    weightMax: "",
    heightMin: "",
    heightMax: "",
    lifeSpanMin: "",
    lifeSpanMax: "",
    img: "",
    temperament: [],
  };
  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  let dispatch = useDispatch();
  const AllTemperaments = useSelector((state) => state.temperaments);
  const allDogs = useSelector((state) => state.dogs);
  const [error, setError] = useState("");
  const [state, setState] = useState(obj);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const loadTemperament = (e) => {
    let temperaments = [...state.temperament];
    if (
      !temperaments.includes(e.target.value) &&
      e.target.value !== "nothing"
    ) {
      temperaments.push(e.target.value);
      setState({ ...state, temperament: temperaments });
    } else return null;
  };

  let name = changeName(state.name);

  let buscar = searchExis(allDogs, state.name);

  let deleteTem = (e) => {
    setState({
      ...state,
      temperament: remove(state.temperament, e.target.value),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, name: name });
    if (validate(state) === "ok") {
      if (buscar !== undefined) {
        alert("Breed already exists, try adding another");
        setState(obj);
      } else {
        setError("");
        console.log(state);
        dispatch(createDog(state));
        setState(obj);
        alert("created");
        dispatch(getAllDogs());
      }
    } else {
      setError(validate(state));
    }
  };

  return (
    <div className={`${s.container}`}>
      <div className={`${s.div}`}>
        <Form
          label="Name"
          type="text"
          value={state.name}
          name="name"
          onChange={(e) => handleChange(e)}
        />
        <Form
          label="Mixinum weight"
          type="number"
          value={state.weightMin}
          name="weightMin"
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className={`${s.div}`}>
        <Form
          label="Image"
          placeholder="image"
          type="text"
          value={state.img}
          name="img"
          onChange={(e) => handleChange(e)}
        />
        <Form
          label="Maximum weight"
          type="number"
          value={state.weightMax}
          name="weightMax"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className={`${s.div}`}>
        <Form
          label="Minimun height "
          type="number"
          name="heightMin"
          value={state.heightMin}
          onChange={(e) => handleChange(e)}
        />
        <Form
          label="Life span min"
          type="number"
          value={state.lifeSpanMin}
          name="lifeSpanMin"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className={`${s.div}`}>
        <Form
          label="Maximum height"
          type="number"
          value={state.heightMax}
          name="heightMax"
          onChange={(e) => handleChange(e)}
        />
        <Form
          label="Life span max"
          type="number"
          value={state.lifeSpanMax}
          name="lifeSpanMax"
          onChange={(e) => handleChange(e)}
        />
      </div>

      <label className={s.name}>
        Temperaments :
        <select
          className={`${s.select}`}
          onChange={loadTemperament}
          value={state.temperament}
          name="temperament"
        >
          <option value="nothing">Select</option>
          {AllTemperaments.map((t) => {
            return (
              <option key={t.id} value={t.temperament}>
                {t.name}
              </option>
            );
          })}
        </select>
      </label>
      <br />
      {state.temperament.map((t, index) => {
        return (
          <button className={s.temp} key={index} onClick={deleteTem} value={t}>
            {t},
          </button>
        );
      })}

      {!error ? null : <span className={s.err}>{error}</span>}
      <br />
      <Link to="/home">
        <button className={s.button}>Cancel</button>
      </Link>
      <button onClick={handleSubmit} className={s.button}>
        Add
      </button>
    </div>
  );
};

export default CreateDog;
