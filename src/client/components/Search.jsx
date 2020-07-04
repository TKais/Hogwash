import React, { useState } from 'react';
import Input from './Input.jsx';
import Button from './Button.jsx';
import Error from './Error.jsx';
import List from './List.jsx';
import Loader from './Loader.jsx';
import API from '../js';

function Search() {
  const [searchString, setSearchString] = useState('');
  const [error, setError] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoadingStatus] = useState(false);

  function updateUI(response) {
    if (response.status === 'ok') {
      setLoadingStatus(false);
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
      setLoadingStatus(true);
      if (API.isURLOrQueryString(searchString) === 'query' && API.isValidQueryString(searchString)) {
        const requestArticles = await API.getArticles(searchString);
        const response = await requestArticles.json();
        updateUI(response);
      }
    } catch (err) {
      setLoadingStatus(false);
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
      { error.length > 0 && <Error message={error} /> }

      { loading && <Loader /> }

      { articles && articles.length > 0 && <List items={articles} /> }
    </div>
  );
}

export default Search;
