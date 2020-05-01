import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Input from './Input.jsx';
import Button from './Button.jsx';
import MultiButton from './MultiButton.jsx';
// import getData from '../js/aylien';

function Search() {
  const [mode, setMode] = useState('Url');
  const [searchString, setSearchString] = useState('');
  const label = mode === 'Url' || !mode ? 'Provide a url' : 'Provide a search query';

  return (
    <div>
      <Input
        ariaLabel={label}
        mode={mode}
        value={searchString}
        onChange={evt => setSearchString(evt.target.value)}
      />
      <MultiButton
        onClick={evt => setMode(evt.target)}
      />
      <Button
        text="Query"
        variant="tertiary"
        onClick={evt => setMode(evt.target)}
      />
      <Button
        text="Check"
        variant="primary"
      />
    </div>
  );
}

export default Search;
