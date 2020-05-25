import 'core-js/stable';
import 'regenerator-runtime/runtime';
// These packages are required to use async/await
// Babel docs recommend this over @babel/polyfill for @babel versions 7 or later
// https://babeljs.io/docs/en/babel-polyfill

/*
// Implementation details
*/

function isValidQueryString(queryString) {
  // Run logic to prevent XSS attacks
  if (!queryString || (queryString && /^javascript:|[<>&]/.test(queryString))) {
    return false;
  }
  return true;
}

/*
// API
*/

export default async function getArticles(queryString) {
  if (!isValidQueryString(queryString)) {
    throw new Error('Invalid query string');
  }

  try {
    const request = await fetch('http://localhost:8080/articles', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: queryString,
    });
    return request;
  } catch (err) {
    throw new Error(err.message);
  }
}
