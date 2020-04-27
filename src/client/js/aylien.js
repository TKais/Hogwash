/*
// Implementation details
*/

function isValidURLString(url) {
  const urlRegex = /^(https?):\/\/(www)?.(\w+)?.(\w+).(org|org|net|edu|io|)\/?(.+)/;
  return urlRegex.test(url);
}


/*
// API
*/

export default async function getData(url) {
  if (!isValidURLString(url)) {
    throw new Error('Invalid URL string');
  }
}
