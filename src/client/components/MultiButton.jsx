import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button.jsx';

function MultiButton(props) {
  const [activeButton, setActiveButton] = useState('url-button');
  return (
    <Button id="url-button" variant="tertiary" /> | <Button variant="tertiary" />
  );
}

MultiButton.propTypes = {
  onClick: PropTypes.func,
}

export default MultiButton;
