import axiosClient from "./apiClient";

export const register = async (body) => {
  return await axiosClient.post("/auth/register", body);
};

export const login = async (body) => {
  return await axiosClient.post("/auth/login", body);
};

export const getInfo = async () => {
  return await axiosClient.get("/users/get-user");
};
