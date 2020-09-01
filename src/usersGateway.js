export const fetchUsersData = (url) => 
  fetch(url)
    .then( response => response.json() );

export const fetchPositions = fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
  .then( response => response.json() );

export const fetchToken =  
  fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token")
    .then( response => response.json() );

export const postUserData = (token, userData) => 
  fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
    method: "Post",
    headers: {
      'Token': token,
      "Content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  })
  .catch( error => new Error(error) );

