/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable func-names */

import UserService from "../../api/userService";
import {
  SET_USER_GEO_DATA,
  SET_USER_ORDER,
} from "../actions-conts/actions-conts";
import { setUserGeoDataAC, setUserOrderAC } from "../actions/actions";

const initialState = {
  userAdress: "",
  userLocation: "",
  currentUserOrder: {
    size: "",
    adds: [],
    sizeCount: 0,
    addsCount: 0,
    totalCount: 0,
  },
};

const userReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case SET_USER_GEO_DATA:
      stateCopy.userAdress = action.payload.city + " , " + action.payload.road;
      return {
        ...stateCopy,
      };
    case SET_USER_ORDER:
      console.log(action);
      if (action.payload.type === "size") {
        stateCopy.currentUserOrder.sizeCount = action.payload.count;
      }
      if (action.payload.type === "adds") {
        stateCopy.currentUserOrder.addsCount += action.payload.count;
      }
      stateCopy.currentUserOrder.totalCount = stateCopy.currentUserOrder.sizeCount + stateCopy.currentUserOrder.addsCount
      return {
        ...stateCopy
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
    console.log("GET DATA", geoData);
    dispatch(setUserGeoDataAC(geoData.address));
  };
};
export const setUserOrder = (e) => {
  return async function (dispatch) {
    if (e.target.closest(".current-dish__size")?.dataset?.sizeCount) {
      const sizeCount = e.target.closest(".current-dish__size").dataset
        .sizeCount;
      dispatch(setUserOrderAC({ type: "size", count: +sizeCount }));
      return;
    }
    if (e.target.closest(".vkuiCheckbox__input")?.dataset?.addsCount) {
      const addsCount = e.target.closest(".vkuiCheckbox__input").dataset
        .addsCount;
      dispatch(setUserOrderAC({ type: "adds", count: +addsCount }));
      return;
    }
  };
};
export default userReducer;
