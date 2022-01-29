import React from "react";
import s from "./stylesCreate.module.css";

function Form({ label, type, value, name, onChange, className }) {
  return (
    <div>
      <form className={className}>
        <label className={`${s.label}`}> {label}</label>
        <br />
        <input type={type} value={value} name={name} onChange={onChange} />
      </form>
    </div>
  );
}

export default Form;
