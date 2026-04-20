"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ProfileImageUploader;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _CameraAltRounded = _interopRequireDefault(require("@mui/icons-material/CameraAltRounded"));
var _AccountCircleRounded = _interopRequireDefault(require("@mui/icons-material/AccountCircleRounded"));
var _SettingsCard = _interopRequireDefault(require("./SettingsCard"));
var _constants = require("./constants");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // CRM KIT — ProfileImageUploader: premium avatar upload with hover overlay
function ProfileImageUploader(_ref) {
  var currentImage = _ref.currentImage,
    _ref$userName = _ref.userName,
    userName = _ref$userName === void 0 ? '' : _ref$userName,
    onUpload = _ref.onUpload,
    _ref$uploading = _ref.uploading,
    uploading = _ref$uploading === void 0 ? false : _ref$uploading;
  var fileRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    preview = _useState2[0],
    setPreview = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    feedback = _useState4[0],
    setFeedback = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    hovered = _useState6[0],
    setHovered = _useState6[1];
  var handleFileChange = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var _e$target$files;
      var file, reader, result;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            file = (_e$target$files = e.target.files) === null || _e$target$files === void 0 ? void 0 : _e$target$files[0];
            if (file) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            if (file.type.startsWith('image/')) {
              _context.n = 2;
              break;
            }
            setFeedback({
              type: 'error',
              message: 'אנא בחר קובץ תמונה בלבד'
            });
            setTimeout(function () {
              return setFeedback(null);
            }, 4000);
            return _context.a(2);
          case 2:
            if (!(file.size > 5 * 1024 * 1024)) {
              _context.n = 3;
              break;
            }
            setFeedback({
              type: 'error',
              message: 'גודל הקובץ חייב להיות עד 5MB'
            });
            setTimeout(function () {
              return setFeedback(null);
            }, 4000);
            return _context.a(2);
          case 3:
            reader = new FileReader();
            reader.onload = function (ev) {
              return setPreview(ev.target.result);
            };
            reader.readAsDataURL(file);
            if (!onUpload) {
              _context.n = 5;
              break;
            }
            _context.n = 4;
            return onUpload(file);
          case 4:
            result = _context.v;
            if (result !== null && result !== void 0 && result.success) {
              setFeedback({
                type: 'success',
                message: 'התמונה עודכנה בהצלחה'
              });
              setPreview(null);
            } else {
              setFeedback({
                type: 'error',
                message: (result === null || result === void 0 ? void 0 : result.message) || 'שגיאה בהעלאת התמונה'
              });
              setPreview(null);
            }
            setTimeout(function () {
              return setFeedback(null);
            }, 4000);
          case 5:
            e.target.value = '';
          case 6:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function handleFileChange(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var displayImage = preview || currentImage;
  var initials = userName.split(' ').map(function (w) {
    return w[0];
  }).join('').slice(0, 2);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SettingsCard["default"], {
    title: "\u05EA\u05DE\u05D5\u05E0\u05EA \u05E4\u05E8\u05D5\u05E4\u05D9\u05DC",
    description: "\u05D4\u05E2\u05DC\u05D0\u05D4 \u05D0\u05D5 \u05E2\u05D3\u05DB\u05D5\u05DF \u05E9\u05DC \u05EA\u05DE\u05D5\u05E0\u05EA \u05D4\u05E4\u05E8\u05D5\u05E4\u05D9\u05DC \u05E9\u05DC\u05DA",
    icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AccountCircleRounded["default"], {}),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Collapse, {
      "in": !!feedback,
      children: feedback && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Alert, {
        severity: feedback.type,
        onClose: function onClose() {
          return setFeedback(null);
        },
        sx: {
          borderRadius: "".concat(_constants.PA_RADIUS.sm, "px"),
          fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
          fontSize: '0.8125rem'
        },
        children: feedback.message
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        gap: {
          xs: '20px',
          sm: '28px'
        },
        flexDirection: {
          xs: 'column',
          sm: 'row'
        }
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.ButtonBase, {
        onClick: function onClick() {
          var _fileRef$current;
          return !uploading && ((_fileRef$current = fileRef.current) === null || _fileRef$current === void 0 ? void 0 : _fileRef$current.click());
        },
        onMouseEnter: function onMouseEnter() {
          return setHovered(true);
        },
        onMouseLeave: function onMouseLeave() {
          return setHovered(false);
        },
        disabled: uploading,
        "aria-label": "\u05E9\u05D9\u05E0\u05D5\u05D9 \u05EA\u05DE\u05D5\u05E0\u05EA \u05E4\u05E8\u05D5\u05E4\u05D9\u05DC",
        sx: {
          position: 'relative',
          borderRadius: '50%',
          flexShrink: 0,
          '&:focus-visible': {
            outline: "2px solid ".concat(_constants.PA_COLORS.accent),
            outlineOffset: 4
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, {
          src: displayImage || undefined,
          sx: {
            width: 108,
            height: 108,
            fontSize: '2rem',
            fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
            fontWeight: 600,
            backgroundColor: displayImage ? 'transparent' : _constants.PA_COLORS.accentSubtle,
            color: _constants.PA_COLORS.accent,
            boxShadow: hovered ? _constants.PA_SHADOWS.avatarHover : _constants.PA_SHADOWS.avatar,
            transition: _constants.PA_TRANSITIONS.normal
          },
          children: !displayImage && initials
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3px',
            backgroundColor: 'rgba(15,23,42,0.45)',
            borderRadius: '50%',
            opacity: hovered ? 1 : 0,
            transition: _constants.PA_TRANSITIONS.fast,
            backdropFilter: 'blur(1px)'
          },
          children: uploading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CircularProgress, {
            size: 22,
            thickness: 3,
            sx: {
              color: '#fff'
            }
          }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CameraAltRounded["default"], {
              sx: {
                fontSize: 20,
                color: '#fff'
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
              sx: {
                fontSize: '0.625rem',
                fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
                fontWeight: 600,
                color: '#fff',
                lineHeight: 1,
                letterSpacing: '0.02em'
              },
              children: "\u05E9\u05D9\u05E0\u05D5\u05D9 \u05EA\u05DE\u05D5\u05E0\u05D4"
            })]
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          flex: 1,
          textAlign: {
            xs: 'center',
            sm: 'right'
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          sx: {
            fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
            fontSize: '0.9375rem',
            fontWeight: 600,
            color: _constants.PA_COLORS.textPrimary,
            letterSpacing: '-0.01em'
          },
          children: userName || 'תמונת פרופיל'
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          sx: _objectSpread(_objectSpread({}, _constants.PA_TYPOGRAPHY.caption), {}, {
            fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
            color: _constants.PA_COLORS.textMuted,
            marginTop: '4px'
          }),
          children: "JPG, PNG \u05D0\u05D5 GIF \u2014 \u05DE\u05E7\u05E1\u05D9\u05DE\u05D5\u05DD 5MB"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          component: "span",
          onClick: function onClick() {
            var _fileRef$current2;
            return !uploading && ((_fileRef$current2 = fileRef.current) === null || _fileRef$current2 === void 0 ? void 0 : _fileRef$current2.click());
          },
          role: "button",
          tabIndex: 0,
          onKeyDown: function onKeyDown(e) {
            var _fileRef$current3;
            if (e.key === 'Enter') (_fileRef$current3 = fileRef.current) === null || _fileRef$current3 === void 0 || _fileRef$current3.click();
          },
          sx: {
            display: 'inline-block',
            fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
            fontSize: '0.8125rem',
            fontWeight: 600,
            color: _constants.PA_COLORS.accent,
            marginTop: '10px',
            cursor: 'pointer',
            transition: _constants.PA_TRANSITIONS.micro,
            '&:hover': {
              color: _constants.PA_COLORS.accentHover
            }
          },
          children: currentImage ? 'החלפת תמונה' : 'העלאת תמונה'
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      ref: fileRef,
      type: "file",
      accept: "image/*",
      onChange: handleFileChange,
      style: {
        display: 'none'
      }
    })]
  });
}
//# sourceMappingURL=ProfileImageUploader.js.map