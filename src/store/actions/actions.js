import {
  CHECK_PANEL,
  CHECK_VIEW,
  GET_ALL_SHOPS,
  SET_CURRENT_SHOP_LOADING,
  SET_CURRENT_SHOP_MENU,
  SET_LOADING,
  SET_USER_GEO_DATA,
  SET_USER_ORDER,
} from "../actions-conts/actions-conts";

export const setAllShopsAC = (payload) => {
  return {
    type: GET_ALL_SHOPS,
    payload,
  };
};

export const checkActivePanelAC = (payload) => {
  return {
    type: CHECK_PANEL,
    payload,
  };
};
export const checkActiveViewAC = (payload) => {
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
export const setUserOrderAC = (payload) => {
  return {
    type: SET_USER_ORDER,
    payload,
  };
};
export const setLoadingAC = (payload) => {
  return {
    type: SET_LOADING,
    payload,
  };
};
export const setCurrentShopLoadingAC = (payload) => {
  return {
    type: SET_CURRENT_SHOP_LOADING,
    payload,
  };
};
