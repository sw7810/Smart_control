// services/ApiService.js
import axios from 'axios';

const ApiService = axios.create({
  baseURL: 'https://your-api-url.com/api', // 백엔드 API URL을 설정합니다.
  headers: {
    'Content-Type': 'application/json',
  },
});

// 응답 처리
ApiService.interceptors.response.use(
  (response) => response,
  (error) => {
    // API 응답 에러 처리 (예: 인증 오류)
    console.error(error);
    return Promise.reject(error);
  }
);

export default ApiService;
