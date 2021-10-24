/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable func-names */

import ShopService from "../../api/shopService";
import {
  CHECK_PANEL,
  CHECK_VIEW,
  GET_ALL_SHOPS,
  SET_CURRENT_SHOP_MENU,
} from "../actions-conts/actions-conts";
import { setAllShopsAC, setCurrentShopAC } from "../actions/actions";
import {
  VIEWS,
  PANELS,
  ALL_SHPS_URL,
  CURRENT_SHOP_URL,
  CURRENT_SHOP_CATEGORIES_URL,
  CURRENT_SHOP_MENU_URL,
} from "../../consts/conts";

const initialState = {
  shops: [],
  activePanels: {
    [VIEWS.HOME_VIEW]: PANELS.MAIN_PANEL,
  },
  activeView: VIEWS.HOME_VIEW,
  currentShop: {
    id: 0,
    caption: "",
    img: "",
    name: "",
    menu: [],
    catigories: [],
  },
};

const shopsReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case GET_ALL_SHOPS:
      stateCopy.shops = [
        ...action.payload.sort((a, b) => a.middleRate - b.middleRate),
      ];
      return {
        ...stateCopy,
      };
    case CHECK_PANEL:
      stateCopy.activePanels = action.payload;
      return {
        ...stateCopy,
      };
    case CHECK_VIEW:
      stateCopy.activeView = action.payload;
      return {
        ...stateCopy,
      };
    case SET_CURRENT_SHOP_MENU:
      const id = +action.payload.shopId;
      stateCopy.currentShop.catigories = action.payload.categories;
      stateCopy.currentShop.menu = action.payload.menu;
      stateCopy.currentShop.name = stateCopy.shops[id - 1].name;
      stateCopy.currentShop.img = stateCopy.shops[id - 1].img;
      return {
        ...stateCopy,
      };
    default:
      return state;
  }
};

export const setAllShops = () => {
  return async function (dispatch) {
    try {
      const data = await ShopService.getAllShops(ALL_SHPS_URL);
      dispatch(setAllShopsAC(data.data));
    } catch (e) {
      console.log(e);
    }
  };
};
export const setCurrentShop = (id) => {
  console.log("ID", id);
  return async function (dispatch) {
    try {
/*       const menu = await ShopService.getCurrentShopMenu(
        CURRENT_SHOP_MENU_URL + id
      );
      const categories = await ShopService.getCurrentShopCategories(
        `${CURRENT_SHOP_MENU_URL}${id}/${CURRENT_SHOP_CATEGORIES_URL}`
      );
      dispatch(
        setCurrentShopAC({
          menu: menu.data,
          categories: categories.data,
          shopId: id,
        })
      ); */
      console.log(menu, categories);
    } catch (e) {
      console.log(e);
    }
  };
};
export default shopsReducer;
