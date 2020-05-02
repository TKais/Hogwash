import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Input from './Input.jsx';
import Button from './Button.jsx';
import MultiButton from './MultiButton.jsx';
import aylienAPI from '../js';

function Search() {
  const [searchString, setSearchString] = useState('');
  const [activeButton, setActiveButton] = useState('url-button');
  const label = activeButton === 'url-button' ? 'Provide a url' : 'Provide a search query';

  return (
    <div>
      <Input
        placeholder={label}
        ariaLabel={label}
        value={searchString}
        onChange={evt => setSearchString(evt.target.value)}
      />
      <MultiButton
        firstButtonId="url-button"
        firstButtonText="Url"
        secondButtonId="query-button"
        secondButtonText="Query"
        onClick={evt => setActiveButton(evt.target.id)}
      />
      <Button
        text="Check"
        variant="primary"
        onClick={() => activeButton === 'url-button' ? aylienAPI.getURLData(searchString) : aylienAPI.getQueryData(searchString)}
      />
    </div>
  );
}

export default Search;
