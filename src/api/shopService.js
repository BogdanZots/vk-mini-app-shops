import axios from "axios";
export default class ShopService {
  static getAllShops(url) {
    return axios.get(url);
  }
  static getCurrentShopMenu(url) {
    return axios.get(url);
  }
  static getCurrentShopCategories(url) {
    return axios.get(url);
  }
}
