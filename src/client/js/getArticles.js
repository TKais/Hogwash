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
  if (!queryString || (queryString && /[<>&]/.test(queryString))) {
    return false;
  }
  return true;
}

/*
// API
*/

export default async function getArticles(queryString) {
  console.log('process--->', process.env.API_KEY);
  if (!isValidQueryString(queryString)) {
    throw new Error('Invalid query string');
  }
  fetch('http://localhost:8080/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: queryString,
  })
    .then(data => data.json())
    .then(data => console.log(data));
}
