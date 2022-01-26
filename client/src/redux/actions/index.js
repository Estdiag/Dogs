import axios from "axios";
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const CREATE_DOG = "CREATE_DOG";
export const GET_DOG = "GET_DOG";
export const FILTER = "FILTER";
export const GET_ID_DOG = "GET_ID_DOG";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";

export function getAllDogs() {
  return function (dispatch) {
    return fetch(`http://localhost:3001/dogs`)
      .then((responde) => responde.json())
      .then((get) => dispatch({ type: "GET_ALL_DOGS", payload: get }));
  };
}
export function getTemperaments() {
  return function (dispatch) {
    return fetch(`http://localhost:3001/temperament`)
      .then((responde) => responde.json())
      .then((get) => dispatch({ type: "GET_TEMPERAMENTS", payload: get }));
  };
}
export function getDog(name) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/dogs?name=${name}`)
      .then((response) => response.json())
      .then((dog) => dispatch({ type: "GET_DOG", payload: dog }));
  };
}
export function filter(data) {
  return { type: "FILTER", payload: data };
}

export function getIdDog(id) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/dogs/${id}`)
      .then((response) => response.json())
      .then((dog) => dispatch({ type: "GET_ID_DOG", payload: dog }));
  };
}

export function createDog(body) {
  return async function () {
    const data = await axios.post("http://localhost:3001/dogs", body);
    return data;
  };
}

// export async function createDog(body) {
//   return fetch("http://localhost:3001/dogs", {
//     method: "POST",
//     mode: "cors",

//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   })
//     .then((request) => request)
//     .catch((error) => console.log(error));
// }
