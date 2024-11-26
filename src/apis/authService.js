import axiosClient from "./apiClient";

export const register = async (body) => {
  return axiosClient.post("/auth/register", body);
};

export const login = async (body) => {
  return axiosClient.post("/auth/login", body);
};

export const getInfo = async () => {
  return axiosClient.get("/users/get-user");
};
