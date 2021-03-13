import httpService from "./httpService";
import { endPoint } from "../config";

export const TEAM_LEAD_ROLE_ID = 3;

export const create = data => {
  return httpService.post(`${endPoint.userAPI}/register`, data);
};

export default {
  create,
  TEAM_LEAD_ROLE_ID,
};
