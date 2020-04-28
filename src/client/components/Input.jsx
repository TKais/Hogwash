import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const [value, updateValue] = useState('');

  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      aria-label={props.ariaLabel}
      value={value}
      onChange={evt => updateValue(evt.target.value)}
    />
  );
}

Input.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  mode: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
