import {
  FILTER_GENER,
  GET_MOVIES_DATA_ERROR,
  GET_MOVIES_DATA_LOADING,
  GET_MOVIES_DATA_SUCCESS,
} from "./actionTypes";

// thunk call to fetch movie list
export const getMovieDataLoading = () => ({
  type: GET_MOVIES_DATA_LOADING,
});

export const getMovieDataSuccess = (payload) => ({
  type: GET_MOVIES_DATA_SUCCESS,
  payload,
});

export const getMovieDataError = (message) => ({
  type: GET_MOVIES_DATA_ERROR,
  payload: message,
});



// action object for filter  feature

export const filterByGenre = (payload) => ({
  type : FILTER_GENER,
  payload
});
