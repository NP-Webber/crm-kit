import axios from 'axios';

/**
 * createApiClient — יצירת Axios instance עם interceptors מובנים
 *
 * @param {Object} options
 * @param {string} options.baseURL - כתובת בסיס ל-API (ברירת מחדל: '/api')
 * @param {string} options.refreshEndpoint - נתיב refresh (ברירת מחדל: '/auth/refresh')
 * @param {string} options.storagePrefix - prefix ל-localStorage (ברירת מחדל: 'crm')
 * @param {string} options.loginRedirect - נתיב להפניה בכישלון (ברירת מחדל: '/login')
 * @param {Function} options.onAuthFailure - callback בכישלון אימות (חלופה להפניה)
 * @returns {AxiosInstance}
 */
export function createApiClient(options = {}) {
  const {
    baseURL = '/api',
    refreshEndpoint = '/auth/refresh',
    storagePrefix = 'crm',
    loginRedirect = '/login',
    onAuthFailure,
  } = options;

  const tokenKey = `${storagePrefix}_accessToken`;
  const refreshKey = `${storagePrefix}_refreshToken`;

  const api = axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
  });

  // Request interceptor — Authorization header
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem(tokenKey);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // Response interceptor — token refresh
  let isRefreshing = false;
  let failedQueue = [];

  const processQueue = (error, token = null) => {
    failedQueue.forEach(({ resolve, reject }) => {
      if (error) reject(error);
      else resolve(token);
    });
    failedQueue = [];
  };

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          }).then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest);
          });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const refreshToken = localStorage.getItem(refreshKey);
          if (!refreshToken) {
            throw new Error('No refresh token');
          }

          const { data } = await axios.post(
            `${baseURL}${refreshEndpoint}`,
            { refreshToken }
          );
          localStorage.setItem(tokenKey, data.accessToken);
          localStorage.setItem(refreshKey, data.refreshToken);

          processQueue(null, data.accessToken);
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
          return api(originalRequest);
        } catch (refreshError) {
          processQueue(refreshError, null);
          localStorage.removeItem(tokenKey);
          localStorage.removeItem(refreshKey);
          if (onAuthFailure) {
            onAuthFailure(refreshError);
          } else {
            window.location.href = loginRedirect;
          }
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    }
  );

  return api;
}
