import React from 'react';
import PropTypes from 'prop-types';

function Error(props) {
  return (
    <div>{props.message}</div>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
