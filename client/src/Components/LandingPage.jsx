import React from "react";
import { Link } from "react-router-dom";
import "./stylesPag.css";

function LandingPage() {
  return (
    <div>
      <h1>Bienvenido a su pagina de perros</h1>
      <Link to="/home">
        <button>Empecemos</button>
      </Link>
    </div>
  );
}

export default LandingPage;
