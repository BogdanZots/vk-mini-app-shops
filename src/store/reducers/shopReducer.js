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
  SET_CURRENT_SHOP_LOADING,
  SET_CURRENT_SHOP_MENU,
  SET_LOADING,
} from "../actions-conts/actions-conts";
import {
  setAllShopsAC,
  setCurrentShopAC,
  setCurrentShopLoadingAC,
  setLoadingAC,
} from "../actions/actions";
import {
  VIEWS,
  PANELS,
  ALL_SHOPS_URL,
  CURRENT_SHOP_CATEGORIES_URL,
  CURRENT_SHOP_MENU_URL,
  ITEMS_PER_PAGE,
} from "../../consts/conts";

const initialState = {
  shops: [],
  currentItemsCount: ITEMS_PER_PAGE,
  totalItemsCount: 0,
  currentPage: 0,
  isLoading: true,
  activePanels: {
    [VIEWS.HOME_VIEW]: PANELS.MAIN_PANEL,
  },
  activeView: VIEWS.HOME_VIEW,
  currentShop: {
    isLoading: true,
    id: 0,
    caption: "",
    img: "",
    name: "",
    menu: [],
    middleRate: null,
    addressText: "",
    activeCategory: null,
    categories: [],
    workingFrom: "",
    workingTo: "",
  },
};

const shopsReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case GET_ALL_SHOPS:
      console.log(action);
      stateCopy.currentPage = action.payload.page;
      const arr1 = action.payload.content.sort(
        (a, b) => a.middleRate - b.middleRate
      );
      stateCopy.shops = [...new Set([...stateCopy.shops, ...arr1])];
      stateCopy.totalItemsCount = action.payload.totalElements;
      if (stateCopy.currentItemsCount <= stateCopy.totalItemsCount) {
      }
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
    case SET_LOADING:
      stateCopy.isLoading = action.payload;
      return {
        ...stateCopy,
      };
      case SET_CURRENT_SHOP_LOADING :
        stateCopy.currentShop.isLoading = action.payload
        return{
          ...stateCopy
        }
    case SET_CURRENT_SHOP_MENU:
      const id = +action.payload.shopId;
      const currentShop = stateCopy.shops.find((shop) => id === shop.id);
      stateCopy.currentShop = {
        ...currentShop,
        menu: action.payload.menu,
        categories: action.payload.categories,
      };

      return {
        ...stateCopy,
      };
    default:
      return state;
  }
};

export const setAllShops = (pageNum = 1, pageSize = 2) => {
  console.log("PAGE SIZE", pageSize);
  return async function (dispatch) {
    try {
      const data = await ShopService.getAllShops(
        `${ALL_SHOPS_URL}?pageNumber=${pageNum}&pageSize=${pageSize}&lat=0&lng=0`
      );
      dispatch(setLoadingAC(false));
      dispatch(
        setAllShopsAC({
          content: data.data.content,
          totalElements: data.data.totalElements,
          page: pageNum,
        })
      );
    } catch (e) {
      console.log(e);
    }
  };
};
export const setCurrentShop = (id, categoryId, pageNum = 1, pageSize = 5) => {
  return async function (dispatch) {
    try {
      dispatch(setCurrentShopLoadingAC(true));
      const categories = await ShopService.getCurrentShopCategories(
        `${CURRENT_SHOP_MENU_URL}${id}/${CURRENT_SHOP_CATEGORIES_URL}`
      );
      const catId = categoryId || categories.data[0].id;
      const menu = await ShopService.getCurrentShopMenu(
        `${CURRENT_SHOP_MENU_URL}${id}/category/${catId}/menu?pageNumber=${pageNum}&pageSize=${pageSize}&lat=0&lng=0`
      );
      dispatch(setCurrentShopLoadingAC(false))
      console.log("menu", menu, "cat", categories);
      dispatch(
        setCurrentShopAC({
          menu: menu.data.content,
          categories: categories.data,
          shopId: id,
        })
      );
    } catch (e) {
      console.log(e);
    }
  };
};
export default shopsReducer;
