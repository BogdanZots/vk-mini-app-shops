import {
  CHECK_PANEL,
  CHECK_VIEW,
  GET_ALL_SHOPS,
  SET_CURRENT_SHOP_MENU,
  SET_USER_GEO_DATA,
} from "../actions-conts/actions-conts";

export const setAllShopsAC = (payload) => {
  return {
    type: GET_ALL_SHOPS,
    payload,
  };
};

export const checkActivePanelAC = (payload) => {
  console.log("payload", payload);
  return {
    type: CHECK_PANEL,
    payload,
  };
};
export const checkActiveViewAC = (payload) => {
  console.log("payload", payload);
  return {
    type: CHECK_VIEW,
    payload,
  };
};
export const setCurrentShopAC = (payload) => {
  return {
    type: SET_CURRENT_SHOP_MENU,
    payload,
  };
};
export const setUserGeoDataAC = (payload) => {
  return {
    type: SET_USER_GEO_DATA,
    payload,
  };
};
