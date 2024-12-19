import axiosClient from "./apiClient";

export const changePassword = async (data) => {
  const response = await axiosClient.put("/users/change-password", data);
  return response.data;
};
