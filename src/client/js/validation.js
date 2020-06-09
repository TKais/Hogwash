export function isValidQueryString(queryString) {
  // Run logic to prevent XSS attacks
  if (!queryString || (queryString && /^javascript:|[<>&]/.test(queryString))) {
    return false;
  }
  return true;
}

export default function isURLOrQueryString(string) {
  // check if the given input is a URL or query string
  const urlRegex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/g;

  return urlRegex.test(string) ? 'url' : 'query';
}
