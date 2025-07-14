import axios from 'axios';

const notehubToken = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN + 'api';

export const nextServer = axios.create({
  baseURL: notehubToken,
  withCredentials: true,
});
