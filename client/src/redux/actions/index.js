export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const CREATE_DOG = "CREATE_DOG";
export const GET_DOG = "GET_DOG";

export function getAllDogs() {
  return function (dispatch) {
    return fetch(`http://localhost:3001/dogs`)
      .then((responde) => responde.json())
      .then((get) => dispatch({ type: "GET_ALL_DOGS", payload: get }));
  };
}
export function getDog(name) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/dogs?name=${name}`)
      .then((response) => response.json())
      .then((dog) => dispatch({ type: "GET_DOG", payload: dog }));
  };
}

export function createDog() {
  return function (dispatch) {
    return fetch(`http://localhost:3001/dogs`, {
      method: "POST",
      mode: "no-cors", // "no-cors", *cors, same-origin
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON,
    })
      .then((responde) => responde.json())
      .then((responde2) =>
        dispatch({ type: "CREATE_DOG", payload: responde2 })
      );
  };
}
