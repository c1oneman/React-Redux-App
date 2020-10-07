import { FETCH_AGE_START, FETCH_AGE_SUCCESS } from "../actions";

const initialState = {
  person: {},
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AGE_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_AGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        person: action.payload
      };
    default:
      return state;
  }
};
