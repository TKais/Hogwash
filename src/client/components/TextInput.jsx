import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import getData from '../js/aylien';

function TextInput(props) {
  const [value, updateValue] = useState('');

  return (
    <input type="text" placeholder={props.placeholder} aria-label={props.ariaLabel} value={value} onChange={evt => updateValue(evt.target.value)} />
  );
}

TextInput.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default TextInput;
