import React from "react";

function Input({ label, value, onChange, type }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
}

export default Input;
