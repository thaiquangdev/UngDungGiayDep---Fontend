import axiosClient from "./apiClient";

export const getProducts = async (query) => {
  const { sort = 0, limit = 8, page = 1, name = "", category = "" } = query;
  const response = await axiosClient.get(`/products/get-products`, {
    params: { sort, limit, page, name, category },
  });
  return response.data;
};

export const getProduct = async (slug) => {
  const response = await axiosClient.get(`/products/get-product/${slug}`);
  return response.data;
};

export const reviewProduct = async (data) => {
  const response = await axiosClient.post("/reviews/create-review", data);
  return response.data;
};

export const getReviews = async (productId) => {
  const response = await axiosClient.get(`/reviews/get-reviews/${productId}`);
  return response.data;
};
