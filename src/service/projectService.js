import httpService from "./httpService";
import { endPoint } from "../config";

export const TEAM_LEAD_ROLE_ID = 3;

export const create = data => {
  return httpService.post(`${endPoint.projectAPI}`, data);
};

export const getListApi = () => {
  return httpService.get(`${endPoint.projectAPI}/list`);
};

export const getDetailApi = (id) => {
  return httpService.get(`${endPoint.projectAPI}/${id}`);
};

export const saveDetails = id => {
  return httpService.put(`${endPoint.projectAPI}/${id}`);
};

export default {
  create,
  getListApi,
  getDetailApi,
  saveDetails,
  TEAM_LEAD_ROLE_ID,
};
