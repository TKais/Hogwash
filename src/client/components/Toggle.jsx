import React from 'react';
import PropTypes from 'prop-types';

function Toggle(props) {
  return (
    <button onClick={props.onClick}>
      Switch
    </button>
  );
}

Toggle.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Toggle;
