import React, { useState } from "react";
import "./Select.css";
import PropTypes from "prop-types";

export default function Input({ onChangePropInput }) {
  const [currentValue, setCurrentValue] = useState("");

  const onInputChange = e => {
    onChangePropInput(e.target.value);
    setCurrentValue(e.target.value);
  };

  return (
    <div className="selectContainer">
      <label for="cars">Choose an option:</label>
      <select name="cars" id="cars" onChange={onInputChange}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
}

Input.propTypes = {
  onChangePropInput: PropTypes.func
};

Input.defaultProps = {
  onChangePropInput: () => {}
};
