export const BASE_URL = "https://nostresso-back.herokuapp.com/";
export const ALL_SHOPS_URL = BASE_URL + "shop/all";
export const CURRENT_SHOP_MENU_URL = BASE_URL + "shop/";
export const CURRENT_SHOP_CATEGORIES_URL = "categories";
export const GEO_LOCATION_URL =
  "https://geocode-maps.yandex.ru/1.x/?apikey=58644385-f6c9-4932-8603-6756aa2d4314&geocode=";
export const ITEMS_PER_PAGE = 2;

export const VIEWS = {
  HOME_VIEW: "home",
  CURRENT_SHOP_VIEW: "current-cafe-view",
  MAP_VIEW: "map",
};
export const PANELS = {
  SEARCH_PANELS: ["home", "map", "current-shop", "current-shop-order-product"],
  MAIN_PANEL: "main",
  CURRENT_SHOP_PANEL: "current-shop",
  CURRENT_SHOP_ORDER_PANEL: "current-shop-order-product",
  MAP_PANEL: "map-panel",
};
export const TABS = {
  small: 140,
  medium: 160,
  large: 180,
};
