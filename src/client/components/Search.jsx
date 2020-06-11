import React, { useState } from 'react';
import Input from './Input.jsx';
import Button from './Button.jsx';
import Error from './Error.jsx';
import List from './List.jsx';
import API from '../js';

function Search() {
  const [searchString, setSearchString] = useState('');
  const [error, setError] = useState('');
  const [articles, setArticles] = useState([]);

  function updateUI(response) {
    if (response.status === 'ok') {
      if (response.totalResults === 0) {
        setError('No results for this search');
        setArticles([]);
      } else {
        setArticles(response.articles);
      }
    } else {
      setError(response.message);
    }
  }

  async function submitInput() {
    try {
      if (API.isURLOrQueryString(searchString) === 'query' && API.isValidQueryString(searchString)) {
        const requestArticles = await API.getArticles(searchString);
        const response = await requestArticles.json();
        updateUI(response);
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <Input
        placeholder="Ask me anything or provide a URL"
        ariaLabel="Ask me anything or provide a URL"
        value={searchString}
        onChange={evt => setSearchString(evt.target.value)}
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
        articles && articles.length > 0 && <List items={articles} />
      }
    </div>
  );
}

export default Search;
