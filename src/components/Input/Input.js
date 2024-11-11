import React from "react";
import classes from "./Input.module.css";

const Input = ({ value, onChange, placeholder }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.input_block}>
        <span>Название :</span>
        <input
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        ></input>
      </div>
    </div>
  );
};

export default Input;
