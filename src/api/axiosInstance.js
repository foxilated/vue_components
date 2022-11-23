import axios from 'axios';

const axiosInstance = axios.create();
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 401) {
//       window.location.href = '/login';
//     } else if (error.response.status === 413) {
//       console.log(error);
//     }
//   }
// );
// axiosInstance.interceptors.request.use(
//   (config) => {
//     let token = localStorage.getItem('token');
//     config.baseURL = 'https://epp-api.lab-logic.com/api/';
//     config.headers['Authorization'] = `Bearer ${token}`;

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error), (window.location.href = '/login');
//   }
// );

export default axiosInstance;
