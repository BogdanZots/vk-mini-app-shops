import axios from "axios";
import $api from "./api";
export default class ShopService {
  static getAllShops(url) {
    return $api.get(url)
  }
  static getCurrentShopMenu(url) {
    return $api.get(url);
  }
  static getCurrentShopCategories(url) {
    return $api.get(url, {});
  }
}
