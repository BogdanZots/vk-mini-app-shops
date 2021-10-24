import axios from "axios";
import $api from "./api";
export default class UserService {
  static getGeo(url) {
    return $api.get(url);
  }
}
