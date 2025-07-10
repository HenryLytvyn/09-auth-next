import axios from 'axios';

//! Instance

export const api = axios.create({
  // baseURL: 'https://notehub-public.goit.study/api',
  // baseURL: 'https://notehub-api.goit.study',
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
});
