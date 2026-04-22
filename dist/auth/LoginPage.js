"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LoginFields = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _material = require("@mui/material");
var _Visibility = _interopRequireDefault(require("@mui/icons-material/Visibility"));
var _VisibilityOff = _interopRequireDefault(require("@mui/icons-material/VisibilityOff"));
var _LockOutlined = _interopRequireDefault(require("@mui/icons-material/LockOutlined"));
var _AuthContext = require("./AuthContext");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LoginFields = exports.LoginFields = function LoginFields(_ref) {
  var _passwordTextFieldPro;
  var username = _ref.username,
    password = _ref.password,
    onUsernameChange = _ref.onUsernameChange,
    onPasswordChange = _ref.onPasswordChange,
    showPassword = _ref.showPassword,
    onToggleShowPassword = _ref.onToggleShowPassword,
    _ref$usernameLabel = _ref.usernameLabel,
    usernameLabel = _ref$usernameLabel === void 0 ? 'שם משתמש' : _ref$usernameLabel,
    _ref$passwordLabel = _ref.passwordLabel,
    passwordLabel = _ref$passwordLabel === void 0 ? 'סיסמה' : _ref$passwordLabel,
    _ref$showPasswordLabe = _ref.showPasswordLabel,
    showPasswordLabel = _ref$showPasswordLabe === void 0 ? 'הצג סיסמה' : _ref$showPasswordLabe,
    _ref$hidePasswordLabe = _ref.hidePasswordLabel,
    hidePasswordLabel = _ref$hidePasswordLabe === void 0 ? 'הסתר סיסמה' : _ref$hidePasswordLabe,
    usernameTextFieldProps = _ref.usernameTextFieldProps,
    passwordTextFieldProps = _ref.passwordTextFieldProps,
    stackSx = _ref.stackSx;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Stack, {
    spacing: 2,
    sx: stackSx,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, _objectSpread({
      label: usernameLabel,
      value: username,
      onChange: function onChange(e) {
        return onUsernameChange(e.target.value);
      },
      autoComplete: "username",
      required: true,
      fullWidth: true
    }, usernameTextFieldProps)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, _objectSpread(_objectSpread({
      label: passwordLabel,
      value: password,
      onChange: function onChange(e) {
        return onPasswordChange(e.target.value);
      },
      type: showPassword ? 'text' : 'password',
      autoComplete: "current-password",
      required: true,
      fullWidth: true
    }, passwordTextFieldProps), {}, {
      InputProps: _objectSpread(_objectSpread({}, (passwordTextFieldProps === null || passwordTextFieldProps === void 0 ? void 0 : passwordTextFieldProps.InputProps) || {}), {}, {
        sx: _objectSpread(_objectSpread({}, (passwordTextFieldProps === null || passwordTextFieldProps === void 0 || (_passwordTextFieldPro = passwordTextFieldProps.InputProps) === null || _passwordTextFieldPro === void 0 ? void 0 : _passwordTextFieldPro.sx) || {}), {}, {
          '& .MuiInputAdornment-positionEnd': {
            marginInlineStart: 0,
            marginInlineEnd: 0,
            paddingInline: 4,
            backgroundColor: 'inherit',
            borderRadius: 'inherit'
          }
        }),
        endAdornment: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.InputAdornment, {
          position: "end",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
            onClick: onToggleShowPassword,
            "aria-label": showPassword ? hidePasswordLabel : showPasswordLabel,
            sx: {
              margin: 0
            },
            children: showPassword ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_VisibilityOff["default"], {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Visibility["default"], {})
          })
        })
      })
    }))]
  });
};

/**
 * LoginPage — דף כניסה בסיסי למערכות CRM
 * כולל אפשרות הצגה/הסתרה של סיסמה.
 */
var LoginPage = function LoginPage(_ref2) {
  var _ref2$title = _ref2.title,
    title = _ref2$title === void 0 ? 'כניסה למערכת' : _ref2$title,
    _ref2$subtitle = _ref2.subtitle,
    subtitle = _ref2$subtitle === void 0 ? 'הזן שם משתמש וסיסמה כדי להמשיך' : _ref2$subtitle,
    _ref2$submitText = _ref2.submitText,
    submitText = _ref2$submitText === void 0 ? 'התחבר' : _ref2$submitText,
    _ref2$usernameLabel = _ref2.usernameLabel,
    usernameLabel = _ref2$usernameLabel === void 0 ? 'שם משתמש' : _ref2$usernameLabel,
    _ref2$passwordLabel = _ref2.passwordLabel,
    passwordLabel = _ref2$passwordLabel === void 0 ? 'סיסמה' : _ref2$passwordLabel,
    _ref2$showPasswordLab = _ref2.showPasswordLabel,
    showPasswordLabel = _ref2$showPasswordLab === void 0 ? 'הצג סיסמה' : _ref2$showPasswordLab,
    _ref2$hidePasswordLab = _ref2.hidePasswordLabel,
    hidePasswordLabel = _ref2$hidePasswordLab === void 0 ? 'הסתר סיסמה' : _ref2$hidePasswordLab,
    _ref2$redirectTo = _ref2.redirectTo,
    redirectTo = _ref2$redirectTo === void 0 ? '/' : _ref2$redirectTo,
    onLoginSuccess = _ref2.onLoginSuccess,
    onLoginError = _ref2.onLoginError,
    containerSx = _ref2.containerSx,
    paperSx = _ref2.paperSx,
    formSx = _ref2.formSx,
    titleTypographyProps = _ref2.titleTypographyProps,
    subtitleTypographyProps = _ref2.subtitleTypographyProps,
    usernameTextFieldProps = _ref2.usernameTextFieldProps,
    passwordTextFieldProps = _ref2.passwordTextFieldProps,
    submitButtonProps = _ref2.submitButtonProps,
    errorAlertProps = _ref2.errorAlertProps,
    iconProps = _ref2.iconProps,
    _ref2$fieldsOnly = _ref2.fieldsOnly,
    fieldsOnly = _ref2$fieldsOnly === void 0 ? false : _ref2$fieldsOnly;
  var _useAuth = (0, _AuthContext.useAuth)(),
    login = _useAuth.login;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    username = _useState2[0],
    setUsername = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showPassword = _useState6[0],
    setShowPassword = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState0 = _slicedToArray(_useState9, 2),
    error = _useState0[0],
    setError = _useState0[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {
      var user, _err$response, message, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            event.preventDefault();
            if (!(!username || !password)) {
              _context.n = 1;
              break;
            }
            setError('יש למלא שם משתמש וסיסמה');
            return _context.a(2);
          case 1:
            setError('');
            setLoading(true);
            _context.p = 2;
            _context.n = 3;
            return login(username, password);
          case 3:
            user = _context.v;
            if (onLoginSuccess) {
              onLoginSuccess(user);
            } else {
              navigate(redirectTo, {
                replace: true
              });
            }
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            message = (_t === null || _t === void 0 || (_err$response = _t.response) === null || _err$response === void 0 || (_err$response = _err$response.data) === null || _err$response === void 0 ? void 0 : _err$response.message) || (_t === null || _t === void 0 ? void 0 : _t.message) || 'שגיאה בהתחברות';
            setError(message);
            if (onLoginError) onLoginError(_t);
          case 5:
            _context.p = 5;
            setLoading(false);
            return _context.f(5);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4, 5, 6]]);
    }));
    return function handleSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  if (fieldsOnly) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(LoginFields, {
      username: username,
      password: password,
      onUsernameChange: setUsername,
      onPasswordChange: setPassword,
      showPassword: showPassword,
      onToggleShowPassword: function onToggleShowPassword() {
        return setShowPassword(function (prev) {
          return !prev;
        });
      },
      usernameLabel: usernameLabel,
      passwordLabel: passwordLabel,
      showPasswordLabel: showPasswordLabel,
      hidePasswordLabel: hidePasswordLabel,
      usernameTextFieldProps: usernameTextFieldProps,
      passwordTextFieldProps: passwordTextFieldProps
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: _objectSpread({
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: 2
    }, containerSx),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Paper, {
      elevation: 4,
      sx: _objectSpread({
        width: '100%',
        maxWidth: 420,
        p: {
          xs: 3,
          sm: 4
        },
        borderRadius: 3
      }, paperSx),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Stack, {
        spacing: 2.5,
        component: "form",
        onSubmit: handleSubmit,
        sx: formSx,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Stack, {
          direction: "row",
          spacing: 1.25,
          alignItems: "center",
          justifyContent: "center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_LockOutlined["default"], _objectSpread({
            color: "primary"
          }, iconProps)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, _objectSpread(_objectSpread({
            variant: "h5",
            fontWeight: 700
          }, titleTypographyProps), {}, {
            children: title
          }))]
        }), subtitle ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, _objectSpread(_objectSpread({
          variant: "body2",
          color: "text.secondary",
          textAlign: "center"
        }, subtitleTypographyProps), {}, {
          children: subtitle
        })) : null, error ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Alert, _objectSpread(_objectSpread({
          severity: "error"
        }, errorAlertProps), {}, {
          children: error
        })) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(LoginFields, {
          username: username,
          password: password,
          onUsernameChange: setUsername,
          onPasswordChange: setPassword,
          showPassword: showPassword,
          onToggleShowPassword: function onToggleShowPassword() {
            return setShowPassword(function (prev) {
              return !prev;
            });
          },
          usernameLabel: usernameLabel,
          passwordLabel: passwordLabel,
          showPasswordLabel: showPasswordLabel,
          hidePasswordLabel: hidePasswordLabel,
          usernameTextFieldProps: usernameTextFieldProps,
          passwordTextFieldProps: passwordTextFieldProps
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, _objectSpread(_objectSpread({
          type: "submit",
          variant: "contained",
          size: "large",
          disabled: loading,
          fullWidth: true
        }, submitButtonProps), {}, {
          children: loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CircularProgress, {
            size: 22,
            color: "inherit"
          }) : submitText
        }))]
      })
    })
  });
};
var _default = exports["default"] = LoginPage;
//# sourceMappingURL=LoginPage.js.map