import axios from "axios";

export const FETCH_AGE_START = "FETCH_AGE_START";
export const FETCH_AGE_SUCCESS = "FETCH_AGE_SUCCESS";
export const FETCH_AGE_FAILURE = "FETCH_AGE_FAILURE";
// action creator that is going to do some async stuff
export const fetchJobs = (url) => (dispatch) => {
  dispatch({ type: FETCH_AGE_START });
  axios
    .get(url)
    .then((res) => {
      // res.data
      dispatch({ type: FETCH_AGE_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log(err));
};
