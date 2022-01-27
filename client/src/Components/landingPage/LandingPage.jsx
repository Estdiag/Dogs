import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./styleLanding.module.css";
import perro from "./perro.png";

function LandingPage() {
  let navigate = useNavigate();
  return (
    <>
      <div className={`${s.contenedor}`}></div>
      <div>
        <h1 className={`${s.h1}`}>Welcome to an app about dog breeds</h1>

        <img
          src={perro}
          className={`${s.button}`}
          onClick={() => {
            navigate("/home");
          }}
        ></img>
      </div>
    </>
  );
}

export default LandingPage;
