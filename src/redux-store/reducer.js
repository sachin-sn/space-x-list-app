import {
  LOAD_INITIAL_FAILURE,
  LOAD_INITIAL_REQUEST,
  LOAD_INITIAL_SUCCESS,
  ADD_TO_FILTER_LIST,
} from "./actions";

export default (state, action) => {
  switch (action.type) {
    case LOAD_INITIAL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_INITIAL_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };
    case LOAD_INITIAL_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_TO_FILTER_LIST:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};
