import axios from 'axios';

let baseURL = import.meta.env.VITE_API_URL || "localhost:3110";

export const api = axios.create({
    baseURL: baseURL,
    withCredentials: true,
});

api.defaults.headers.post['Access-Control-Allow-Origin'] = baseURL;

export default api;

