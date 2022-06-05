import axios from "axios";
import { BASE_URL } from "../Utils/constants";

const apiClient = axios.create({
  baseURL: BASE_URL,
});
//--------------------------
export const GetAllProductsAPI = async () => {
  return apiClient
    .get(`/products`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};


