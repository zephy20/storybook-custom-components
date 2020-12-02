import React, { useState } from "react";
import "./Input.css";
import PropTypes from "prop-types";

export default function Input({
  onChangePropInput,
  minLength,
  inputType,
  showError,
  inputPlaceholder,
  inputRequired,
  inputAutoComplete
}) {
  const [currentValue, setCurrentValue] = useState("");
  const [inputError, setInputError] = useState("");
  const [minLengthError, setMinLengthError] = useState("");

  const validateNumber = str => {
    if (typeof str === "number") return true;
    if (typeof str != "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
  };

  const validateEmail = str => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(str).toLowerCase());
  };

  const validateInput = () => {
    if (!currentValue) return;

    if (minLength && currentValue.length < minLength)
      setMinLengthError(`Minimum length is ${minLength}`);

    switch (inputType) {
      case "email": {
        if (!validateEmail(currentValue)) {
          setInputError("Invalid email");
        }
      }

      case "number": {
        if (!validateNumber(currentValue)) setInputError("Invalid number");
      }

      default:
        break;
    }
  };

  const onInputChange = e => {
    onChangePropInput(e.target.value);
    setCurrentValue(e.target.value);
    validateInput();
  };

  console.log(showError, "showerror", inputError, inputPlaceholder);

  return (
    <div className="inputContainer">
      <input
        className="inputField"
        value={currentValue}
        onChange={onInputChange}
        type={inputType}
        placeholder={inputPlaceholder}
        required={inputRequired}
        autoComplete={inputAutoComplete}
      />
      {minLengthError && <p style={{ color: "red" }}>{minLengthError}</p>}

      {showError && inputError && <p style={{ color: "red" }}>{inputError}</p>}
    </div>
  );
}

Input.propTypes = {
  onChangePropInput: PropTypes.func,
  minLength: PropTypes.number,
  inputType: PropTypes.string,
  showError: PropTypes.bool,
  inputPlaceholder: PropTypes.string,
  inputRequired: PropTypes.bool,
  inputAutoComplete: PropTypes.bool
};

Input.defaultProps = {
  onChangePropInput: () => {},
  minLength: 0,
  inputType: "text",
  inputPlaceholder: "Enter input.."
};
