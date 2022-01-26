import { GET_ALL_DOGS } from "../actions/index";
import { GET_DOG } from "../actions/index";
import { FILTER } from "../actions/index";
import { GET_ID_DOG } from "../actions/index";
import { GET_TEMPERAMENTS } from "../actions/index";

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

    case GET_DOG:
      return {
        ...state,
        dogs: action.payload,
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
