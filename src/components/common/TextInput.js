import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
  let wrapperClass = "field";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <div className="control">
        <input
          type="text"
          name={name}
          className="input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      {error && <div className="notification is-danger is-light">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default TextInput;
