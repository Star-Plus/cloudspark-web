import AuthService from "$lib/features/auth/AuthService";
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.DEV ?  "http://localhost:5000/api" : "http://158.101.230.143/api",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = AuthService.getInstance().token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;