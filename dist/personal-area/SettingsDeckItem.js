"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SettingsDeckItem;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _ExpandMore = _interopRequireDefault(require("@mui/icons-material/ExpandMore"));
var _ErrorOutlined = _interopRequireDefault(require("@mui/icons-material/ErrorOutlined"));
var _constants = require("./constants");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // CRM KIT — SettingsDeckItem
// A single collapsible "deck card" used inside a SettingsDeck.
// Visual language: Windows 11 Settings — quiet card, soft border,
// header is the click/keyboard target, body opens with a smooth
// Collapse animation. All styling pulled from PA_* design tokens.
/**
 * SettingsDeckItem
 *
 * Controlled / uncontrolled collapsible settings card.
 *
 * @param {Object}  props
 * @param {React.ReactNode} props.title           - main title (string or node)
 * @param {React.ReactNode} [props.description]   - small helper text under title
 * @param {React.ReactNode} [props.icon]          - leading icon
 * @param {React.ReactNode} [props.adornment]     - extra node rendered on the trailing
 *                                                  side of the header (badge, switch summary, etc.)
 * @param {boolean} [props.defaultOpen=false]
 * @param {boolean} [props.isOpen]                - controlled open state
 * @param {(next:boolean)=>void} [props.onOpenChange]
 * @param {boolean} [props.hasError=false]
 * @param {React.ReactNode} [props.error]         - error message rendered in header strip
 * @param {boolean} [props.disabled=false]
 * @param {boolean} [props.dense=false]           - tighter padding
 * @param {string}  [props.id]                    - id for the item (used for ARIA wiring)
 * @param {Object}  [props.sx]
 * @param {Object}  [props.headerSx]
 * @param {Object}  [props.bodySx]
 * @param {React.ReactNode} props.children
 */
function SettingsDeckItem(_ref) {
  var title = _ref.title,
    description = _ref.description,
    icon = _ref.icon,
    adornment = _ref.adornment,
    _ref$defaultOpen = _ref.defaultOpen,
    defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen,
    isOpen = _ref.isOpen,
    onOpenChange = _ref.onOpenChange,
    _ref$hasError = _ref.hasError,
    hasError = _ref$hasError === void 0 ? false : _ref$hasError,
    error = _ref.error,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$dense = _ref.dense,
    dense = _ref$dense === void 0 ? false : _ref$dense,
    id = _ref.id,
    _ref$sx = _ref.sx,
    sx = _ref$sx === void 0 ? {} : _ref$sx,
    _ref$headerSx = _ref.headerSx,
    headerSx = _ref$headerSx === void 0 ? {} : _ref$headerSx,
    _ref$bodySx = _ref.bodySx,
    bodySx = _ref$bodySx === void 0 ? {} : _ref$bodySx,
    children = _ref.children;
  var reactId = (0, _react.useId)();
  var safeId = id || "settings-deck-item-".concat(reactId.replace(/:/g, ''));
  var headerId = "".concat(safeId, "-header");
  var bodyId = "".concat(safeId, "-content");
  var isControlled = typeof isOpen === 'boolean';
  var _useState = (0, _react.useState)(defaultOpen),
    _useState2 = _slicedToArray(_useState, 2),
    internalOpen = _useState2[0],
    setInternalOpen = _useState2[1];
  var open = isControlled ? isOpen : internalOpen;
  var setOpen = (0, _react.useCallback)(function (next) {
    if (!isControlled) setInternalOpen(next);
    onOpenChange === null || onOpenChange === void 0 || onOpenChange(next);
  }, [isControlled, onOpenChange]);
  var toggle = (0, _react.useCallback)(function () {
    if (disabled) return;
    setOpen(!open);
  }, [disabled, open, setOpen]);
  var handleKeyDown = (0, _react.useCallback)(function (e) {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      setOpen(!open);
    }
  }, [disabled, open, setOpen]);
  var accent = hasError ? _constants.PA_COLORS.error : _constants.PA_COLORS.accent;
  var accentSubtle = hasError ? _constants.PA_COLORS.errorLight : _constants.PA_COLORS.accentLight;
  var padBlock = dense ? _constants.PA_SPACING.sm + 2 : _constants.PA_SPACING.md;
  var padInline = dense ? _constants.PA_SPACING.md : _constants.PA_SPACING.lg - 4;
  var wrapperSx = (0, _react.useMemo)(function () {
    return _objectSpread({
      backgroundColor: _constants.PA_COLORS.cardBg,
      border: "1px solid ".concat(hasError ? _constants.PA_COLORS.error : _constants.PA_COLORS.cardBorder),
      borderRadius: "".concat(_constants.PA_RADIUS.lg, "px"),
      boxShadow: _constants.PA_SHADOWS.card,
      overflow: 'hidden',
      transition: _constants.PA_TRANSITIONS.normal,
      opacity: disabled ? 0.6 : 1
    }, sx);
  }, [disabled, hasError, sx]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    role: "listitem",
    sx: wrapperSx,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      id: headerId,
      role: "button",
      tabIndex: disabled ? -1 : 0,
      "aria-expanded": open,
      "aria-controls": bodyId,
      "aria-disabled": disabled || undefined,
      onClick: toggle,
      onKeyDown: handleKeyDown,
      sx: _objectSpread({
        display: 'flex',
        alignItems: 'center',
        gap: "".concat(_constants.PA_SPACING.md, "px"),
        padding: "".concat(padBlock, "px ").concat(padInline, "px"),
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        transition: _constants.PA_TRANSITIONS.fast,
        backgroundColor: open ? _constants.PA_COLORS.sectionBg : 'transparent',
        '&:hover': disabled ? undefined : {
          backgroundColor: _constants.PA_COLORS.sectionBg
        },
        '&:active': disabled ? undefined : {
          backgroundColor: _constants.PA_COLORS.divider
        },
        '&:focus-visible': {
          outline: 'none',
          boxShadow: "inset 0 0 0 2px ".concat(accent)
        }
      }, headerSx),
      children: [icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        "aria-hidden": "true",
        sx: {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 36,
          height: 36,
          borderRadius: "".concat(_constants.PA_RADIUS.md, "px"),
          backgroundColor: accentSubtle,
          color: accent,
          flexShrink: 0,
          transition: _constants.PA_TRANSITIONS.fast,
          '& .MuiSvgIcon-root': {
            fontSize: 20
          }
        },
        children: icon
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          flex: 1,
          minWidth: 0
        },
        children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          component: "div",
          sx: _objectSpread(_objectSpread({}, _constants.PA_TYPOGRAPHY.sectionTitle), {}, {
            fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
            color: hasError ? _constants.PA_COLORS.error : _constants.PA_COLORS.textPrimary,
            margin: 0
          }),
          children: title
        }), description && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          component: "div",
          sx: _objectSpread(_objectSpread({}, _constants.PA_TYPOGRAPHY.sectionDesc), {}, {
            fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
            color: _constants.PA_COLORS.textMuted,
            marginTop: '2px'
          }),
          children: description
        }), hasError && error && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: _objectSpread(_objectSpread({
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            marginTop: '4px',
            color: _constants.PA_COLORS.error
          }, _constants.PA_TYPOGRAPHY.caption), {}, {
            fontFamily: _constants.PA_TYPOGRAPHY.fontFamily
          }),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorOutlined["default"], {
            sx: {
              fontSize: 14
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: error
          })]
        })]
      }), adornment && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: "".concat(_constants.PA_SPACING.sm, "px"),
          flexShrink: 0
        }
        // Stop propagation so interactive adornments (e.g. a Switch)
        // don't accidentally toggle the panel.
        ,
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        onKeyDown: function onKeyDown(e) {
          return e.stopPropagation();
        },
        children: adornment
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        "aria-hidden": "true",
        sx: {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 24,
          height: 24,
          color: _constants.PA_COLORS.textSecondary,
          flexShrink: 0,
          transition: 'transform 220ms cubic-bezier(0.16, 1, 0.3, 1)',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandMore["default"], {
          fontSize: "small"
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Collapse, {
      "in": open,
      timeout: 220,
      unmountOnExit: false,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        id: bodyId,
        role: "region",
        "aria-labelledby": headerId,
        sx: _objectSpread({
          borderTop: "1px solid ".concat(_constants.PA_COLORS.divider),
          padding: "".concat(padBlock + 2, "px ").concat(padInline, "px ").concat(padBlock + 4, "px"),
          backgroundColor: _constants.PA_COLORS.cardBg
        }, bodySx),
        children: children
      })
    })]
  });
}
//# sourceMappingURL=SettingsDeckItem.js.map