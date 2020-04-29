import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Button;
