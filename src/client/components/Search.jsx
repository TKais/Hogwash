import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Input from './Input.jsx';
import Button from './Button.jsx';
// import getData from '../js/aylien';

function Search() {
  const [mode, setMode] = useState('');
  const label = mode === 'url' || !mode ? 'Provide a url' : 'Provide a search query';

  return (
    <div>
      <Input ariaLabel={label} mode={mode} />
      <Button text="mode" onClick={evt => setMode(evt.target.text)} />
    </div>
  );
}

export default Search;
