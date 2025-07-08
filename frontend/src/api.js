import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API
});

API.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  config.headers['Content-Type'] = 'application/json';
  return config;
});

export default API;
