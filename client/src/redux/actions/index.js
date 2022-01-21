export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const CREATE_DOG = "CREATE_DOG";
export const GET_DOG = "GET_DOG";

export function getAllDogs() {
  return function (dispatch) {
    return fetch(`http://localhost:3001/dogs`)
      .then((responde) => responde.json())
      .then((post) => dispatch({ type: "GET_ALL_DOGS", payload: post }));
  };
}
