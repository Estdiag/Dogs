import {
  FILTER,
  GET_ALL_DOGS,
  GET_DOG,
  ORDER,
  GET_ID_DOG,
  GET_TEMPERAMENTS,
  GET_DOGS_API,
  GET_DOGS_DB,
  GET_DOG_TEMPERAMENT,
} from "../actions/index";

const initialState = {
  dogs: [],
  dog: {},
  temperaments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };
    case GET_DOGS_API:
      return {
        ...state,
        dogs: action.payload,
      };
    case GET_DOGS_DB:
      return {
        ...state,
        dogs: action.payload,
      };

    case GET_DOG:
      return {
        ...state,
        dogs: action.payload,
      };

    case GET_DOG_TEMPERAMENT:
      return {
        ...state,
        dogs: action.payload,
      };

    case ORDER:
      return {
        ...state,
        dogs: [...action.payload],
      };
    case FILTER:
      return {
        ...state,
        dogs: [...action.payload],
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case GET_ID_DOG:
      return {
        ...state,
        dog: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
