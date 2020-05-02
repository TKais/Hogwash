import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.jsx';

function MultiButton(props) {
  return (
    <div onClick={props.onClick}>
      <Button
        id={props.firstButtonId}
        variant="tertiary"
        text={props.firstButtonText}
        // onClick={evt => setActiveButton(evt.target.id)}
      /> |
      <Button
        id={props.secondButtonId}
        variant="tertiary"
        text={props.secondButtonText}
        // onClick={evt => setActiveButton(evt.target.id)}
      />
    </div>
  );
}

MultiButton.propTypes = {
  firstButtonId: PropTypes.string.isRequired,
  firstButtonText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  secondButtonId: PropTypes.string.isRequired,
  secondButtonText: PropTypes.string.isRequired,
};

export default MultiButton;
