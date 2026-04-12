"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _AuthContext = require("./AuthContext.js");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * ProtectedRoute — מסנן דפים מאובטחים
 *
 * @param {Object} props
 * @param {string} props.loginPath - נתיב להפניה (ברירת מחדל: '/login')
 * @param {string} props.requiredRole - תפקיד נדרש (אופציונלי)
 * @param {React.ReactNode} props.children
 */var ProtectedRoute = function ProtectedRoute(_ref) {
  var _user$roles, _user$roles2;
  var children = _ref.children,
    _ref$loginPath = _ref.loginPath,
    loginPath = _ref$loginPath === void 0 ? '/login' : _ref$loginPath,
    requiredRole = _ref.requiredRole,
    loadingComponent = _ref.loadingComponent;
  var _useAuth = (0, _AuthContext.useAuth)(),
    isAuthenticated = _useAuth.isAuthenticated,
    loading = _useAuth.loading,
    user = _useAuth.user;
  if (loading) {
    return loadingComponent || /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        padding: 24
      },
      children: "\u05D8\u05D5\u05E2\u05DF..."
    });
  }
  if (!isAuthenticated) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Navigate, {
      to: loginPath,
      replace: true
    });
  }
  if (requiredRole && !(user !== null && user !== void 0 && (_user$roles = user.roles) !== null && _user$roles !== void 0 && _user$roles.includes(requiredRole)) && !(user !== null && user !== void 0 && (_user$roles2 = user.roles) !== null && _user$roles2 !== void 0 && _user$roles2.includes('admin'))) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Navigate, {
      to: "/",
      replace: true
    });
  }
  return children;
};
var _default = exports["default"] = ProtectedRoute;
//# sourceMappingURL=ProtectedRoute.js.map