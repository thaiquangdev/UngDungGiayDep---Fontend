import axiosClient from "./apiClient";

export const getCategories = async (query) => {
  const { page = 1, limit = 8, name = "" } = query; // đặt giá trị mặc định
  const response = await axiosClient.get(`/categories/get-categories`, {
    params: { page, limit, name }, // sử dụng params để tạo query tự động
  });
  return response.data;
};
