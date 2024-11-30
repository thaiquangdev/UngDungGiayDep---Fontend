import axiosClient from "./apiClient";

export const getProducts = async (query) => {
  const { limit = 8, page = 1 } = query;
  const response = await axiosClient.get(`/products/get-products`, {
    params: { limit, page },
  });
  return response.data;
};
