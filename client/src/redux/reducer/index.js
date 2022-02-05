import {
  FILTER,
  GET_ALL_DOGS,
  GET_DOG,
  SORT,
  GET_ID_DOG,
  GET_TEMPERAMENTS,
  FILTER_DATA,
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
    case FILTER_DATA:
      if (action.payload === "db") {
        let data = [];
        state.dogs?.map((d) =>
          d.hasOwnProperty("createdDb") ? data.push(d) : null
        );
        return {
          ...state,
          dogs: data,
        };
      }
      if (action.payload === "api") {
        let data = [];
        state.dogs?.map((d) =>
          !d.hasOwnProperty("createdDb") ? data.push(d) : null
        );
        console.log(data);
        return {
          ...state,
          dogs: data,
        };
      }

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

    case SORT:
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
