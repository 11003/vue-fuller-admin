import axios from "@/plugins/axios";
const { http } = axios;

export const login = {
  post: params => http.post("/userLogin", params)
};
export const logout = {
  post: params => http.post("/userLogout", params)
};
export const getInfo = {
  post: params => http.post("/getUserInfo", params)
};