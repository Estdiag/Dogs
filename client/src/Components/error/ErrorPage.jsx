import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  let navigate = useNavigate();
  return (
    <div>
      <h2>not found </h2>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Back to home
      </button>
    </div>
  );
}

export default ErrorPage;
