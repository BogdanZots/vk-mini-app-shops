import axios from "axios";
import $api from "./api";
export default class UserService {
  static getGeo(url) {
    return fetch(url).then((res) => res.json());
  }
}
