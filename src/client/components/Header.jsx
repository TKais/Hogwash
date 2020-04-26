import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <header>
      <h1>{props.headerText}</h1>
    </header>
  );
}

Header.propTypes = {
  headerText: PropTypes.string,
};

export default Header;
