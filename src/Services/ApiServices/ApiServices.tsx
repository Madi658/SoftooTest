import axios from "axios";
const BASE_URL='https://my-json-server.typicode.com/benirvingplt/products';

const API_HEADER = {
  "x-api-key": "your-access-token",
};
const apiClient = axios.create({
  baseURL: BASE_URL,
});

// Add a request interceptor
// apiClient.interceptors.request.use(
//   async (config) => {
//     // Do something before request is sent
//     const token = await AsyncStorage.getItem("UserToken");
//     // console.log('Tokeeeeen',token);
//     if (token && typeof token !== "undefined") {
//       config.headers = {
//         authorization: `Bearer ${token}`,
//       };
//     }
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   },
// );



export const GetAllProductsAPI = async () => {
  return apiClient
    .get(`/products`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("Error while Getting user", err);
      return err;
    });
};


