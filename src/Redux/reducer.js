import {
  FILTER_GENRE,
  GET_MOVIES_DATA_ERROR,
  GET_MOVIES_DATA_LOADING,
  GET_MOVIES_DATA_SUCCESS,
} from "./actionTypes";

const initState = {
  data: [],
  filterData: [],
  isLoading: false,
  isError: false,
};

export const Reducer = (state = initState, { type, payload }) => {
  // add the switch statement for different actions

  switch (type) {
    case GET_MOVIES_DATA_LOADING:
      return { ...state, isLoading: true };
    case GET_MOVIES_DATA_SUCCESS:
      return { ...state, isLoading: false, data: [...state.data, payload] };
    case GET_MOVIES_DATA_ERROR:
      return { ...state, isError: true };
    case FILTER_GENER :
       const newData = state.data[0]?.filter((item)=>item.genre != payload)
      
       return { ...state, filterData : [ ...state.filterData, newData]}
    default:
      return state;
  }
};
