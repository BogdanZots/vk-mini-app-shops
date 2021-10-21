/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable func-names */

import UserService from "../../api/userService";
import { SET_USER_GEO_DATA } from "../actions-conts/actions-conts";
import { setUserGeoDataAC } from "../actions/actions";

const initialState = {
  userAdress: "",
  userLocation: "",
};

const userReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case SET_USER_GEO_DATA:
      console.log(action);
      stateCopy.userAdress = action.payload.city + " , " + action.payload.road;
      return {
        ...stateCopy,
      };
    default:
      return state;
  }
};

export const setUserGeoData = (location) => {
  return async function (dispatch) {
    const geoData = await UserService.getGeo(
      `https://nominatim.openstreetmap.org/reverse?lat=${location.lat}&lon=${location.long}&zoom=18&addressdetails=1&format=json`
    );
    dispatch(setUserGeoDataAC(geoData.data.address));
  };
};

export default userReducer;
