import React from "react";
import PropTypes from "prop-types";

const SelectInput = ({
  name,
  label,
  value,
  defaultOption,
  options,
  onChange,
  error,
}) => {
  return (
    <div className="field">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <div className="control">
        <div className="select is-link is-normal">
          <select name={name} value={value} onChange={onChange}>
            <option value="">{defaultOption}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
        {error && (
          <div className="notification is-danger is-light">{error}</div>
        )}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  defaultOption: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default SelectInput;
