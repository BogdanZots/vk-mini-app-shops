import axios from "axios";
import $api from "./api";
export default class ShopService {
  static getAllShops(url) {
    return fetch("https://nostresso-back.herokuapp.com/shop/all", {
      method: "GET",
      headers: {
        credentials: "include",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMDQ4NTU4ODAiLCJpYXQiOjE2MzUwNjMwNzksImV4cCI6MTY0MzcwMzA3OX0.vA7WaN2Ep2fmGOVbZPt7Rw7gwt0msKyylKkh7dLOxB0`,
      },
    });
  }
  static getCurrentShopMenu(url) {
    return $api.get(url);
  }
  static getCurrentShopCategories(url) {
    return $api.get(url, {});
  }
}
