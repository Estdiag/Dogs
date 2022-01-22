import React from "react";
import { createDog } from "../redux/actions/index";
import { useDispatch } from "react-redux";

const CreateDog = () => {
  let [state, setState] = React.useState({
    name: "",
    weight: "",
    height: "",
    life_span: "",
  });

  const dispatch = useDispatch();
  let handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDog(state));
  };

  return (
    <div>
      <form>
        <label>Nombre: </label>
        <input
          required
          type={"text"}
          placeholder="Nombre"
          name={"name"}
          value={state.name}
          onChange={(e) => handleChange(e)}
        />
        <label>Altura: </label>
        <input
          required
          type={"text"}
          placeholder="Altura"
          name={"height"}
          value={state.height}
          onChange={(e) => handleChange(e)}
        />
        <label>Peso: </label>
        <input
          required
          type={"text"}
          placeholder="Peso"
          name={"weight"}
          value={state.weight}
          onChange={(e) => handleChange(e)}
        />
        <label>Años de vida: </label>
        <input
          required
          type={"text"}
          placeholder="vida"
          name={"life_span"}
          value={state.life_span}
          onChange={(e) => handleChange(e)}
        />

        <button type={"submit"} onClick={(e) => handleSubmit(e)}>
          Crear
        </button>
      </form>
    </div>
  );
};

export default CreateDog;
