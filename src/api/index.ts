import axios from 'axios';

const axiosInstance = axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: 'https://pre-onboarding-selection-task.shop/',
});

export default axiosInstance;
