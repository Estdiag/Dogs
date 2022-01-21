import { GET_ALL_DOGS } from "../actions/index";
import { GET_DOG } from "../actions/index";
import { CREATE_DOG } from "../actions/index";

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
        dog: action.payload,
      };

    case CREATE_DOG:
      return {
        ...state,
        houses: [...state.dogs, { ...action.payload }],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
