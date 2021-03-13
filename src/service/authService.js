import httpService from "./httpService";
import { endPoint } from "../config";

export const login = data => {
  return httpService.post(`${endPoint.userAPI}/login`, data);
};

export default {
  login,
};
