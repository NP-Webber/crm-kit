"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("@mui/material/styles");
var _CssBaseline = _interopRequireDefault(require("@mui/material/CssBaseline"));
var _createCrmTheme = require("./createCrmTheme.js");
require("./crmGlobals.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * CrmThemeProvider — עוטף את האפליקציה עם ערכת נושא + CSS globals
 *
 * @param {Object} props.theme - MUI theme (ברירת מחדל: defaultCrmTheme)
 * @param {React.ReactNode} props.children
 */var CrmThemeProvider = function CrmThemeProvider(_ref) {
  var theme = _ref.theme,
    children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styles.ThemeProvider, {
    theme: theme || _createCrmTheme.defaultCrmTheme,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CssBaseline["default"], {}), children]
  });
};
var _default = exports["default"] = CrmThemeProvider;
//# sourceMappingURL=CrmThemeProvider.js.map