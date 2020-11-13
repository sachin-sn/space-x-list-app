import Axios from "axios";

export const LOAD_INITIAL_REQUEST = "LOAD_INITIAL_REQUEST";
export const LOAD_INITIAL_SUCCESS = "LOAD_INITIAL_SUCCESS";
export const LOAD_INITIAL_FAILURE = "LOAD_INITIAL_FAILURE";
export const ADD_TO_FILTER_LIST = "ADD_TO_FILTER_LIST";

export async function getSpaceXData(dispatch, filters = []) {
  let URL = `https://api.spaceXdata.com/v3/launches?limit=100`;
  if (filters.length) {
    filters.forEach((f) => {
      if (f.type === "launchYear") {
        URL = `${URL}&launch_year=${f.value}`;
      }
      if (f.type === "successfulLaunch") {
        URL = `${URL}&launch_success=${f.value.toLowerCase()}`;
      }
      if (f.type === "successfulLand") {
        URL = `${URL}&land_success=${f.value.toLowerCase()}`;
      }
    });
  }
  try {
    const response = await Axios.get(URL);
    dispatch({
      type: LOAD_INITIAL_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_INITIAL_FAILURE,
    });
  }
}
