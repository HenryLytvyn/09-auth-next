import axios from 'axios';

//! Instance

const notehubToken = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

export const api = axios.create({
  // baseURL: 'https://notehub-public.goit.study/api',
  // baseURL: 'https://notehub-api.goit.study',
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
});
