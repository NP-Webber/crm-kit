import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx';

/**
 * ProtectedRoute — מסנן דפים מאובטחים
 *
 * @param {Object} props
 * @param {string} props.loginPath - נתיב להפניה (ברירת מחדל: '/login')
 * @param {string} props.requiredRole - תפקיד נדרש (אופציונלי)
 * @param {React.ReactNode} props.children
 */
const ProtectedRoute = ({ children, loginPath = '/login', requiredRole, loadingComponent }) => {
  const { isAuthenticated, loading, user } = useAuth();

  if (loading) {
    return loadingComponent || <div style={{ padding: 24 }}>טוען...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to={loginPath} replace />;
  }

  if (requiredRole && !user?.roles?.includes(requiredRole) && !user?.roles?.includes('admin')) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
