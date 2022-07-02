// eslint-disable-next-line
import axios from '../../utils/axios';

// seller/banner
export const getBanner = () => axios.get('/seller/banner');
export const detailBanner = (id) => axios.get(`/seller/banner/${id}`);
export const addBanner = (data) => axios.post('/seller/banner', data);
export const deleteBanner = (id) => axios.delete(`/seller/banner/${id}`);

// seller/category
export const getCategory = () => axios.get('/seller/category');
export const detailCategory = (id) => axios.get(`/seller/category/${id}`);
export const addCategory = (name) => axios.post('/seller/category', { name });
export const deleteCategory = (id) => axios.delete(`/seller/category/${id}`);

// seller/product
export const getProduct = (accessToken) => axios.get('/seller/product', {
  headers: {
    access_token: accessToken,
  },
});
export const detailProduct = (id) => axios.get(`/seller/product/${id}`);
export const addProduct = (accessToken, payload) => axios.post('/seller/product', payload, {
  headers: {
    'Content-Type': 'multipart/form-data',
    access_token: accessToken,
  },
});
export const updateProduct = (accessToken, id, payload) => axios.put(`/seller/product/${id}`, payload, {
  headers: {
    'Content-Type': 'multipart/form-data',
    access_token: accessToken,
  },
});
export const deleteProduct = (id) => axios.delete(`/seller/product/${id}`);

// seller/order
export const getSellerOrder = (accessToken) => axios.get('/seller/order', {
  headers: {
    access_token: accessToken,
  },
});
export const detailSellerOrder = (id) => axios.get(`/seller/order/${id}`);
export const updateSellerOrder = (id, status) => axios.patch(`/seller/order/${id}`, { status });
export const getSellerOrderProduct = (id) => axios.get(`/seller/order/product/${id}`);