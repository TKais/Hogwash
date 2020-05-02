import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      aria-label={props.ariaLabel}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

Input.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
