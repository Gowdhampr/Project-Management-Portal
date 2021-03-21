import httpService from "./httpService";
import { endPoint } from "../config";

export const TEAM_LEAD_ROLE_ID = 3;

export const create = data => {
  return httpService.post(`${endPoint.projectAPI}`, data);
};

export const getListApi = data => {
  return httpService.get(`${endPoint.projectAPI}/list`, data);
};

export default {
  create,
  getListApi,
  TEAM_LEAD_ROLE_ID,
};
