import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Input from './Input.jsx';
import Button from './Button.jsx';
import MultiButton from './MultiButton.jsx';
// import getData from '../js/aylien';

function Search() {
  const [mode, setMode] = useState('Url');
  const [searchString, setSearchString] = useState('');
  const [activeButton, setActiveButton] = useState('url-button');
  const label = mode === 'Url' || !mode ? 'Provide a url' : 'Provide a search query';
  console.log(`activeButton is: ${activeButton}`);
  console.log(`setMode is: ${setMode}`);

  return (
    <div>
      <Input
        ariaLabel={label}
        mode={mode}
        value={searchString}
        onChange={evt => setSearchString(evt.target.value)}
      />
      <MultiButton
        firstButtonId="url-button"
        firstButtonText="Url"
        secondButtonId="query-button"
        secondButtonText="Query"
        onClick={evt => console.log(evt.target.id) && setActiveButton(evt.target.id)}
      />
      <Button
        text="Check"
        variant="primary"
      />
    </div>
  );
}

export default Search;
