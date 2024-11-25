import axiosClient from "./apiClient";

export const register = async (body) => {
  return axiosClient.post("/auth/register", body);
};
