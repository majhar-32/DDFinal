import axios from 'axios';

// আপনার ব্যাকএন্ড সার্ভারের বেস URL
const API_URL = 'http://localhost:5000/api'; // উদাহরণস্বরূপ

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// আপনি যখন লগইন করার পর টোকেন পাবেন, তখন এটি ব্যবহার করতে পারেন
// প্রতি রিকোয়েস্টে টোকেন পাঠানোর জন্য
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // লগইনের পর টোকেন সেভ করে রাখবেন
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;