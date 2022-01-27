import React from "react";

function Form({ label, type, placeholder, value, name, onChange }) {
  return (
    <div>
      <form>
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
        />
      </form>
    </div>
  );
}

export default Form;
