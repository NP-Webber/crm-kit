"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarProvider = SidebarProvider;
exports.useSidebar = useSidebar;
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SidebarContext = /*#__PURE__*/(0, _react.createContext)(null);
function SidebarProvider(_ref) {
  var children = _ref.children,
    _ref$defaultCollapsed = _ref.defaultCollapsed,
    defaultCollapsed = _ref$defaultCollapsed === void 0 ? false : _ref$defaultCollapsed;
  var _useState = (0, _react.useState)(defaultCollapsed),
    _useState2 = _slicedToArray(_useState, 2),
    collapsed = _useState2[0],
    setCollapsed = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    mobileOpen = _useState4[0],
    setMobileOpen = _useState4[1];
  var toggle = (0, _react.useCallback)(function () {
    return setCollapsed(function (c) {
      return !c;
    });
  }, []);
  var expand = (0, _react.useCallback)(function () {
    return setCollapsed(false);
  }, []);
  var collapse = (0, _react.useCallback)(function () {
    return setCollapsed(true);
  }, []);
  var openMobile = (0, _react.useCallback)(function () {
    return setMobileOpen(true);
  }, []);
  var closeMobile = (0, _react.useCallback)(function () {
    return setMobileOpen(false);
  }, []);
  var toggleMobile = (0, _react.useCallback)(function () {
    return setMobileOpen(function (open) {
      return !open;
    });
  }, []);
  var value = (0, _react.useMemo)(function () {
    return {
      collapsed: collapsed,
      toggle: toggle,
      expand: expand,
      collapse: collapse,
      mobileOpen: mobileOpen,
      openMobile: openMobile,
      closeMobile: closeMobile,
      toggleMobile: toggleMobile
    };
  }, [collapsed, toggle, expand, collapse, mobileOpen, openMobile, closeMobile, toggleMobile]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SidebarContext.Provider, {
    value: value,
    children: children
  });
}
function useSidebar() {
  var ctx = (0, _react.useContext)(SidebarContext);
  if (!ctx) throw new Error('useSidebar must be used within <SidebarProvider>');
  return ctx;
}
//# sourceMappingURL=SidebarContext.js.map