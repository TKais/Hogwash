import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button.jsx';

function MultiButton(props) {
  const [active, setActive] = useState(`${props.firstButtonId}`);

  return (
    <div className="multibutton" onClick={props.onClick}>
      <Button
        id={props.firstButtonId}
        className={active === props.firstButtonId ? 'active' : ''}
        variant="tertiary"
        text={props.firstButtonText}
        onClick={evt => setActive(evt.target.id)}
      /> |
      <Button
        id={props.secondButtonId}
        className={active === props.secondButtonId ? 'active' : ''}
        variant="tertiary"
        text={props.secondButtonText}
        onClick={evt => setActive(evt.target.id)}
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
