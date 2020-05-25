import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Input from './Input.jsx';
import Button from './Button.jsx';
import MultiButton from './MultiButton.jsx';
import Error from './Error.jsx';
import List from './List.jsx';
import API from '../js';

function Search() {
  const [searchString, setSearchString] = useState('');
  const [activeButton, setActiveButton] = useState('url-button');
  const [error, setError] = useState('');
  const [articles, setArticles] = useState([]);
  const label = activeButton === 'url-button' ? 'Provide a url' : 'Provide a search query';

  async function submitInput() {
    try {
      if (activeButton === 'url-button') {
        await API.getURLData(searchString);
      } else {
        const requestArticles = await API.getArticles(searchString);
        const ok = await requestArticles.json();
        console.log(ok);
        setArticles(ok.articles);
      }
    } catch (err) {
      setError(err.message);
    }
  }

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
        onClick={submitInput}
      />
      {
        error.length > 0 && <Error message={error} />
      }
      {
        articles && articles.length > 0 && <List item={articles} />
      }
    </div>
  );
}

export default Search;
