import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button
      id={props.id}
      onClick={props.onClick}
      className={`button button--${props.variant}`}
    >
      {props.text}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

export default Button;
