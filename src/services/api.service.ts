/**
  * Util to make POST call
*/

const makePost = (url: string, data: object) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch(url, options);
};


/**
  * Util to make GET call
*/
const makeGet = (url: string) => {
  return fetch(url);
};

export { makePost, makeGet };
