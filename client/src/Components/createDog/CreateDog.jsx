import React, { useState, useEffect } from "react";
import { createDog, getTemperaments } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import { Link } from "react-router-dom";

const CreateDog = () => {
  let dispatch = useDispatch();
  const AllTemperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  const [error, setError] = useState("");
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
    if (state.name === "") {
      setError(`El campo name es obligatorio`);
      return null;
    }
    if (state.weightMin === "") {
      setError(`El campo weightMin es obligatorio`);
      return null;
    }
    if (state.weightMin < 0) {
      setError(`El campo weightMin no puede ser menor que 0`);
      return null;
    }
    if (state.weightMax === "") {
      setError(`El campo weightMax es obligatorio`);
      return null;
    }
    if (parseInt(state.weightMin) > parseInt(state.weightMax)) {
      setError("El peso minimo no puede ser mayor que el peso maximo");
      return null;
    }
    if (state.heightMin === "") {
      setError(`El campo heightMin es obligatorio`);
      return null;
    }
    if (state.heightMin < 0) {
      setError(`El campo heightMin no puede ser menor que 0`);
      return null;
    }
    if (state.heightMax === "") {
      setError(`El campo heightMax es obligatorio`);
      return null;
    }
    if (parseInt(state.heightMin) > parseInt(state.heightMax)) {
      setError("la altura minima no puede ser mayor que la altura maxima");
      return null;
    }
    if (state.lifeSpanMin === "") {
      setError(`El campo lifeSpanMin es obligatorio`);
      return null;
    }
    if (state.lifeSpanMin < 0) {
      setError(`El campo lifeSpanMin no puede ser menor que 0`);
      return null;
    }
    if (state.lifeSpanMax === "") {
      setError(`El campo lifeSpanMax es obligatorio`);
      return null;
    }
    if (parseInt(state.lifeSpanMin) > parseInt(state.lifeSpanMax)) {
      setError(
        "la esperanza de vida minima no puede ser mayor que la esperanza de vida maxima"
      );
      return null;
    }
    if (state.temperament.length === 0) {
      setError("Debe agregar al menos un temperamento");
      return null;
    }
    if (state.img === "") {
      setError("agregue una imagen");
      return null;
    } else {
      setError("");
      dispatch(createDog(state));
      setState({
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
    }
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
        <br />
        {state.temperament.map((t, index) => {
          return <span key={index}> {t}, </span>;
        })}

        <Form
          label="Image"
          placeholder="image"
          type="text"
          value={state.img}
          name="img"
          onChange={(e) => handleChange(e)}
        />
        {!error ? null : <span>{error}</span>}
        <Link to="/home">
          <button>Cancelar</button>
        </Link>
        <button onClick={handleSubmit}>Crear</button>
      </form>
    </div>
  );
};

export default CreateDog;
