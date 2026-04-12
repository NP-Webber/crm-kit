"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _UploadFileOutlined = _interopRequireDefault(require("@mui/icons-material/UploadFileOutlined"));
var _ExpandMore = _interopRequireDefault(require("@mui/icons-material/ExpandMore"));
var _ExpandLess = _interopRequireDefault(require("@mui/icons-material/ExpandLess"));
var _Edit = _interopRequireDefault(require("@mui/icons-material/Edit"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t4 in e) "default" !== _t4 && {}.hasOwnProperty.call(e, _t4) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t4)) && (i.get || i.set) ? o(f, _t4, i) : f[_t4] = e[_t4]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /**
 * ImportSection — רכיב ייבוא Excel מתקפל לשימוש חוזר
 *
 * @param {Object} props
 * @param {string} props.label - כותרת הסעיף
 * @param {string} props.endpoint - נתיב POST (ל-apiClient)
 * @param {string} props.templateEndpoint - נתיב GET להורדת תבנית
 * @param {string} props.description - תיאור קצר
 * @param {Function} props.onImportDone - callback אחרי ייבוא מוצלח
 * @param {React.ReactNode} props.extraActions - JSX נוסף
 * @param {string} props.entityType - סוג ישות לעדכון חלקי
 * @param {Array} props.identifierColumns - [{ field, label }] עמודות מזהות
 * @param {Object} props.extraFormData - שדות נוספים לשליחה
 * @param {Object} props.apiClient - Axios instance
 */
var ImportSection = function ImportSection(_ref) {
  var _result$errors;
  var label = _ref.label,
    endpoint = _ref.endpoint,
    templateEndpoint = _ref.templateEndpoint,
    description = _ref.description,
    onImportDone = _ref.onImportDone,
    extraActions = _ref.extraActions,
    entityType = _ref.entityType,
    identifierColumns = _ref.identifierColumns,
    extraFormData = _ref.extraFormData,
    apiClient = _ref.apiClient;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    file = _useState4[0],
    setFile = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    replace = _useState6[0],
    setReplace = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    partialMode = _useState8[0],
    setPartialMode = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState0 = _slicedToArray(_useState9, 2),
    identifierColumn = _useState0[0],
    setIdentifierColumn = _useState0[1];
  var _useState1 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState1, 2),
    fileColumn = _useState10[0],
    setFileColumn = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    fileHeaders = _useState12[0],
    setFileHeaders = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    loading = _useState14[0],
    setLoading = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    result = _useState16[0],
    setResult = _useState16[1];
  var _useState17 = (0, _react.useState)(''),
    _useState18 = _slicedToArray(_useState17, 2),
    error = _useState18[0],
    setError = _useState18[1];
  var fileInputRef = (0, _react.useRef)(null);
  var handleFileChange = function handleFileChange(e) {
    var f = e.target.files[0] || null;
    setFile(f);
    setResult(null);
    setError('');
    setFileColumn('');
    if (f && partialMode) fetchHeaders(f);
  };
  var fetchHeaders = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(f) {
      var formData, _yield$apiClient$post, data, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (apiClient) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _context.p = 1;
            formData = new FormData();
            formData.append('file', f);
            _context.n = 2;
            return apiClient.post('/import/preview-headers', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
          case 2:
            _yield$apiClient$post = _context.v;
            data = _yield$apiClient$post.data;
            setFileHeaders(data.headers || []);
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setFileHeaders([]);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function fetchHeaders(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleUpload = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var formData, url, _yield$apiClient$post2, data, _err$response, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!(!file || !apiClient)) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            if (!(partialMode && !identifierColumn)) {
              _context2.n = 2;
              break;
            }
            setError('יש לבחור שדה מזהה במערכת');
            return _context2.a(2);
          case 2:
            if (!(partialMode && !fileColumn)) {
              _context2.n = 3;
              break;
            }
            setError('יש לבחור עמודה מהקובץ שמתאימה לשדה המזהה');
            return _context2.a(2);
          case 3:
            setLoading(true);
            setResult(null);
            setError('');
            _context2.p = 4;
            formData = new FormData();
            formData.append('file', file);
            if (partialMode && entityType) {
              formData.append('identifierColumn', identifierColumn);
              formData.append('fileColumn', fileColumn);
              url = "/import/partial-update/".concat(entityType);
            } else {
              formData.append('replace', replace ? 'true' : 'false');
              url = endpoint;
            }
            if (extraFormData) {
              Object.entries(extraFormData).forEach(function (_ref4) {
                var _ref5 = _slicedToArray(_ref4, 2),
                  k = _ref5[0],
                  v = _ref5[1];
                if (v != null && v !== '') formData.append(k, v);
              });
            }
            _context2.n = 5;
            return apiClient.post(url, formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
          case 5:
            _yield$apiClient$post2 = _context2.v;
            data = _yield$apiClient$post2.data;
            setResult(data);
            setFile(null);
            if (fileInputRef.current) fileInputRef.current.value = '';
            if (onImportDone) onImportDone(data);
            _context2.n = 7;
            break;
          case 6:
            _context2.p = 6;
            _t2 = _context2.v;
            setError(((_err$response = _t2.response) === null || _err$response === void 0 || (_err$response = _err$response.data) === null || _err$response === void 0 ? void 0 : _err$response.error) || 'שגיאה בייבוא הקובץ');
          case 7:
            _context2.p = 7;
            setLoading(false);
            return _context2.f(7);
          case 8:
            return _context2.a(2);
        }
      }, _callee2, null, [[4, 6, 7, 8]]);
    }));
    return function handleUpload() {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleDownloadTemplate = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var response, url, a, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (!(!apiClient || !templateEndpoint)) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            _context3.p = 1;
            _context3.n = 2;
            return apiClient.get(templateEndpoint, {
              responseType: 'blob'
            });
          case 2:
            response = _context3.v;
            url = URL.createObjectURL(response.data);
            a = document.createElement('a');
            a.href = url;
            a.download = "template_".concat(label, ".xlsx");
            a.click();
            URL.revokeObjectURL(url);
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3]]);
    }));
    return function handleDownloadTemplate() {
      return _ref6.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Paper, {
    variant: "outlined",
    sx: {
      mt: 3,
      borderRadius: 2
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2,
        py: 1.5,
        cursor: 'pointer',
        userSelect: 'none'
      },
      onClick: function onClick() {
        return setOpen(function (o) {
          return !o;
        });
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          gap: 1
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_UploadFileOutlined["default"], {
          fontSize: "small",
          color: "action"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Typography, {
          variant: "subtitle2",
          fontWeight: 600,
          children: ["\u05D9\u05D9\u05D1\u05D5\u05D0 ", label]
        })]
      }), open ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandLess["default"], {
        fontSize: "small"
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandMore["default"], {
        fontSize: "small"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Collapse, {
      "in": open,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          px: 2,
          pb: 2,
          borderTop: '1px solid',
          borderColor: 'divider'
        },
        children: [description && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            display: 'block',
            mt: 1.5,
            mb: 1
          },
          children: description
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            display: 'flex',
            gap: 1,
            flexWrap: 'wrap',
            alignItems: 'center',
            mt: 1
          },
          children: [templateEndpoint && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
            variant: "outlined",
            size: "small",
            onClick: handleDownloadTemplate,
            children: "\u05D4\u05D5\u05E8\u05D3 \u05EA\u05D1\u05E0\u05D9\u05EA"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Button, {
            variant: "outlined",
            size: "small",
            component: "label",
            children: ["\u05D1\u05D7\u05E8 \u05E7\u05D5\u05D1\u05E5 Excel", /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              ref: fileInputRef,
              type: "file",
              accept: ".xlsx,.xls",
              hidden: true,
              onChange: handleFileChange
            })]
          }), file && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            variant: "caption",
            color: "text.secondary",
            children: file.name
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.FormControlLabel, {
          control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Checkbox, {
            checked: replace,
            onChange: function onChange(e) {
              setReplace(e.target.checked);
              if (e.target.checked) setPartialMode(false);
            },
            size: "small"
          }),
          label: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            variant: "caption",
            children: "\u05D4\u05D7\u05DC\u05E3 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E7\u05D9\u05D9\u05DE\u05D9\u05DD (\u05DE\u05D7\u05D9\u05E7\u05D4 \u05D5\u05D9\u05E6\u05D9\u05E8\u05D4 \u05DE\u05D7\u05D3\u05E9)"
          }),
          sx: {
            mt: 1,
            display: 'block'
          }
        }), (identifierColumns === null || identifierColumns === void 0 ? void 0 : identifierColumns.length) > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            mt: 1
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.FormControlLabel, {
            control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Checkbox, {
              checked: partialMode,
              onChange: function onChange(e) {
                setPartialMode(e.target.checked);
                if (e.target.checked) setReplace(false);
                if (!e.target.checked) {
                  setIdentifierColumn('');
                  setFileColumn('');
                  setFileHeaders([]);
                } else if (file) {
                  fetchHeaders(file);
                }
              },
              size: "small",
              color: "info"
            }),
            label: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Typography, {
              variant: "caption",
              color: partialMode ? 'info.main' : 'text.secondary',
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Edit["default"], {
                sx: {
                  fontSize: 14,
                  verticalAlign: 'middle',
                  mr: 0.5
                }
              }), "\u05E2\u05D3\u05DB\u05D5\u05DF \u05D7\u05DC\u05E7\u05D9 (\u05E2\u05D3\u05DB\u05D5\u05DF \u05E2\u05DE\u05D5\u05D3\u05D5\u05EA \u05D1\u05DC\u05D1\u05D3 \u05DC\u05DC\u05D0 \u05DE\u05D7\u05D9\u05E7\u05D4/\u05D4\u05D5\u05E1\u05E4\u05D4)"]
            }),
            sx: {
              display: 'block'
            }
          }), partialMode && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              mt: 1,
              p: 1.5,
              bgcolor: 'info.50',
              border: '1px solid',
              borderColor: 'info.light',
              borderRadius: 1
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
              variant: "caption",
              display: "block",
              mb: 0.5,
              children: "\u05D1\u05D7\u05E8 \u05D0\u05D9\u05D6\u05D5 \u05E2\u05DE\u05D5\u05D3\u05D4 \u05DE\u05D4\u05E7\u05D5\u05D1\u05E5 \u05DE\u05EA\u05D0\u05D9\u05DE\u05D4 \u05DC\u05D0\u05D9\u05D6\u05D4 \u05E9\u05D3\u05D4 \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA:"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
              sx: {
                display: 'flex',
                gap: 1.5,
                flexWrap: 'wrap',
                alignItems: 'flex-end'
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
                select: true,
                size: "small",
                value: fileColumn,
                onChange: function onChange(e) {
                  return setFileColumn(e.target.value);
                },
                sx: {
                  minWidth: 160
                },
                label: "\u05E2\u05DE\u05D5\u05D3\u05D4 \u05D1\u05E7\u05D5\u05D1\u05E5",
                disabled: !file || fileHeaders.length === 0,
                children: fileHeaders.map(function (h) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                    value: h,
                    children: h
                  }, h);
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
                variant: "caption",
                sx: {
                  pb: 1
                },
                children: "\u21D0"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
                select: true,
                size: "small",
                value: identifierColumn,
                onChange: function onChange(e) {
                  return setIdentifierColumn(e.target.value);
                },
                sx: {
                  minWidth: 160
                },
                label: "\u05E9\u05D3\u05D4 \u05DE\u05D6\u05D4\u05D4 \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA",
                children: identifierColumns.map(function (ic) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                    value: ic.field,
                    children: ic.label
                  }, ic.field);
                })
              })]
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            mt: 2,
            display: 'flex',
            gap: 1,
            alignItems: 'center'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Button, {
            variant: "contained",
            size: "small",
            onClick: handleUpload,
            disabled: !file || loading,
            children: [loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CircularProgress, {
              size: 16,
              sx: {
                mr: 1
              }
            }) : null, loading ? 'מייבא...' : 'התחל ייבוא']
          })
        }), error && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Alert, {
          severity: "error",
          sx: {
            mt: 1.5
          },
          children: error
        }), result && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Alert, {
          severity: "success",
          sx: {
            mt: 1.5
          },
          children: [result.message || "\u05D9\u05D9\u05D1\u05D5\u05D0 \u05D4\u05D5\u05E9\u05DC\u05DD \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4", result.created != null && " | \u05E0\u05D5\u05E6\u05E8\u05D5: ".concat(result.created), result.updated != null && " | \u05E2\u05D5\u05D3\u05DB\u05E0\u05D5: ".concat(result.updated), ((_result$errors = result.errors) === null || _result$errors === void 0 ? void 0 : _result$errors.length) > 0 && " | \u05E9\u05D2\u05D9\u05D0\u05D5\u05EA: ".concat(result.errors.length)]
        }), extraActions]
      })
    })]
  });
};
var _default = exports["default"] = ImportSection;