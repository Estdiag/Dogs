import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  let navigate = useNavigate();
  return (
    <div>
      <h2>Pagina no encontrada</h2>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Volver al inicio
      </button>
    </div>
  );
}

export default ErrorPage;
