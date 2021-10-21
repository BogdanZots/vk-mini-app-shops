import axios from "axios";
export default class UserService {
  static getGeo(url) {
    return axios.get(url);
  }
}
