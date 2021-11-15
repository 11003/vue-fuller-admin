import http from "@/plugins/axios";

export function login(data) {
  return http({
    url: "/userLogin",
    method: 'post',
    data,
  });
}
export function logout(data) {
  return http({
    url: "/userLogout",
    method: 'post',
    data,
  });
}
export function getInfo(data) {
  return http({
    url: "/getUserInfo",
    method: 'post',
    data,
  });
}
