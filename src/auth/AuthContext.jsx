import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

/**
 * AuthProvider — ניהול הזדהות
 *
 * @param {Object} props
 * @param {Object} props.apiClient - Axios instance (מ-createApiClient)
 * @param {string} props.loginEndpoint - נתיב login (ברירת מחדל: '/auth/login')
 * @param {string} props.logoutEndpoint - נתיב logout (ברירת מחדל: '/auth/logout')
 * @param {string} props.storagePrefix - prefix ל-localStorage (ברירת מחדל: 'crm')
 * @param {Function} props.onLoginSuccess - callback אחרי login מוצלח
 * @param {Function} props.onLogout - callback אחרי logout
 */
export const AuthProvider = ({
  children,
  apiClient,
  loginEndpoint = '/auth/login',
  logoutEndpoint = '/auth/logout',
  storagePrefix = 'crm',
  onLoginSuccess,
  onLogoutCallback,
}) => {
  const tokenKey = `${storagePrefix}_accessToken`;
  const refreshKey = `${storagePrefix}_refreshToken`;
  const userKey = `${storagePrefix}_user`;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem(tokenKey);
    const storedUser = localStorage.getItem(userKey);
    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem(tokenKey);
        localStorage.removeItem(refreshKey);
        localStorage.removeItem(userKey);
      }
    }
    setLoading(false);
  }, [tokenKey, refreshKey, userKey]);

  const login = useCallback(async (username, password) => {
    if (!apiClient) throw new Error('apiClient is required for AuthProvider');
    const { data } = await apiClient.post(loginEndpoint, { username, password });
    localStorage.setItem(tokenKey, data.accessToken);
    localStorage.setItem(refreshKey, data.refreshToken);
    localStorage.setItem(userKey, JSON.stringify(data.user));
    setUser(data.user);
    if (onLoginSuccess) onLoginSuccess(data.user);
    return data.user;
  }, [apiClient, loginEndpoint, tokenKey, refreshKey, userKey, onLoginSuccess]);

  const logout = useCallback(async () => {
    try {
      if (apiClient) {
        const refreshToken = localStorage.getItem(refreshKey);
        await apiClient.post(logoutEndpoint, { refreshToken });
      }
    } catch {
      // continue even if server doesn't respond
    }
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(refreshKey);
    localStorage.removeItem(userKey);
    setUser(null);
    if (onLogoutCallback) onLogoutCallback();
  }, [apiClient, logoutEndpoint, tokenKey, refreshKey, userKey, onLogoutCallback]);

  const hasPermission = useCallback(
    (resource, action) => {
      if (!user) return false;
      if (user.roles?.includes('admin')) return true;
      return true;
    },
    [user]
  );

  const value = {
    user,
    loading,
    login,
    logout,
    hasPermission,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
