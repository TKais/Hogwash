/*
// Implementation details
*/

function isValidQueryString(queryString) {
  console.log(queryString);
  // Run logic to prevent XSS attacks
}


/*
// API
*/

export default async function getNewsArticles(queryString) {
  if (!isValidQueryString(queryString)) {
    throw new Error('Invalid query string');
  }
}
