"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _Mic = _interopRequireDefault(require("@mui/icons-material/Mic"));
var _Stop = _interopRequireDefault(require("@mui/icons-material/Stop"));
var _PlayArrow = _interopRequireDefault(require("@mui/icons-material/PlayArrow"));
var _Pause = _interopRequireDefault(require("@mui/icons-material/Pause"));
var _DeleteOutline = _interopRequireDefault(require("@mui/icons-material/DeleteOutline"));
var _Save = _interopRequireDefault(require("@mui/icons-material/Save"));
var _FiberManualRecord = _interopRequireDefault(require("@mui/icons-material/FiberManualRecord"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
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
 * AudioRecorder — הקלטת שמע מהמיקרופון בדפדפן
 *
 * @param {Function} props.onSave - callback(blob: Blob) כשהמשתמש שומר
 * @param {boolean} props.saving - הצגת ספינר
 * @param {boolean} props.disabled
 */
var AudioRecorder = function AudioRecorder(_ref) {
  var onSave = _ref.onSave,
    _ref$saving = _ref.saving,
    saving = _ref$saving === void 0 ? false : _ref$saving,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var _useState = (0, _react.useState)('idle'),
    _useState2 = _slicedToArray(_useState, 2),
    status = _useState2[0],
    setStatus = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    seconds = _useState4[0],
    setSeconds = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    previewUrl = _useState6[0],
    setPreviewUrl = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    playing = _useState8[0],
    setPlaying = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState0 = _slicedToArray(_useState9, 2),
    micError = _useState0[0],
    setMicError = _useState0[1];
  var mediaRecorder = (0, _react.useRef)(null);
  var chunks = (0, _react.useRef)([]);
  var timerRef = (0, _react.useRef)(null);
  var audioRef = (0, _react.useRef)(null);
  var streamRef = (0, _react.useRef)(null);
  var blobRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    return function () {
      clearInterval(timerRef.current);
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      stopStream();
    };
  }, []);
  var stopStream = function stopStream() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(function (t) {
        return t.stop();
      });
      streamRef.current = null;
    }
  };
  var startRecording = (0, _react.useCallback)(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var stream, mimeType, recorder, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          setMicError('');
          _context.p = 1;
          _context.n = 2;
          return navigator.mediaDevices.getUserMedia({
            audio: true
          });
        case 2:
          stream = _context.v;
          streamRef.current = stream;
          mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus') ? 'audio/webm;codecs=opus' : MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : MediaRecorder.isTypeSupported('audio/ogg;codecs=opus') ? 'audio/ogg;codecs=opus' : '';
          recorder = new MediaRecorder(stream, mimeType ? {
            mimeType: mimeType
          } : undefined);
          chunks.current = [];
          recorder.ondataavailable = function (e) {
            if (e.data.size > 0) chunks.current.push(e.data);
          };
          recorder.onstop = function () {
            var blob = new Blob(chunks.current, {
              type: recorder.mimeType
            });
            blobRef.current = blob;
            var url = URL.createObjectURL(blob);
            if (previewUrl) URL.revokeObjectURL(previewUrl);
            setPreviewUrl(url);
            setStatus('recorded');
            stopStream();
          };
          recorder.start(250);
          mediaRecorder.current = recorder;
          setSeconds(0);
          setStatus('recording');
          timerRef.current = setInterval(function () {
            setSeconds(function (s) {
              return s + 1;
            });
          }, 1000);
          _context.n = 4;
          break;
        case 3:
          _context.p = 3;
          _t = _context.v;
          if (_t.name === 'NotAllowedError' || _t.name === 'PermissionDeniedError') {
            setMicError('לא ניתנה הרשאת מיקרופון. יש לאשר גישה למיקרופון בדפדפן.');
          } else if (_t.name === 'NotFoundError') {
            setMicError('לא נמצא מיקרופון במכשיר.');
          } else {
            setMicError('שגיאה בגישה למיקרופון.');
          }
        case 4:
          return _context.a(2);
      }
    }, _callee, null, [[1, 3]]);
  })), [previewUrl]);
  var stopRecording = (0, _react.useCallback)(function () {
    clearInterval(timerRef.current);
    if (mediaRecorder.current && mediaRecorder.current.state !== 'inactive') {
      mediaRecorder.current.stop();
    }
  }, []);
  var discardRecording = (0, _react.useCallback)(function () {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    blobRef.current = null;
    setPlaying(false);
    setSeconds(0);
    setStatus('idle');
  }, [previewUrl]);
  var togglePlayback = function togglePlayback() {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };
  var onAudioEnded = function onAudioEnded() {
    return setPlaying(false);
  };
  var handleSave = function handleSave() {
    if (blobRef.current && onSave) {
      onSave(blobRef.current);
    }
  };
  var formatTime = function formatTime(s) {
    var m = Math.floor(s / 60).toString().padStart(2, '0');
    var sec = (s % 60).toString().padStart(2, '0');
    return "".concat(m, ":").concat(sec);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Paper, {
    variant: "outlined",
    sx: {
      p: 2,
      mt: 1,
      borderStyle: 'dashed',
      bgcolor: status === 'recording' ? 'error.50' : 'grey.50',
      transition: 'background-color 0.3s'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
      variant: "body2",
      fontWeight: 600,
      sx: {
        mb: 1
      },
      children: "\u05D4\u05E7\u05DC\u05D8\u05EA \u05E9\u05DE\u05E2"
    }), micError && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
      variant: "caption",
      color: "error",
      sx: {
        display: 'block',
        mb: 1
      },
      children: micError
    }), status === 'idle' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
      variant: "outlined",
      color: "error",
      startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Mic["default"], {}),
      onClick: startRecording,
      disabled: disabled || saving,
      size: "small",
      children: "\u05D4\u05EA\u05D7\u05DC \u05D4\u05E7\u05DC\u05D8\u05D4"
    }), status === 'recording' && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        gap: 1.5
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FiberManualRecord["default"], {
        color: "error",
        sx: {
          fontSize: 16,
          animation: 'blink 1s infinite',
          '@keyframes blink': {
            '0%, 100%': {
              opacity: 1
            },
            '50%': {
              opacity: 0.2
            }
          }
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        variant: "body2",
        fontWeight: 600,
        color: "error",
        sx: {
          fontFamily: 'monospace'
        },
        children: formatTime(seconds)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
        color: "error",
        onClick: stopRecording,
        size: "small",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Stop["default"], {})
      })]
    }), status === 'recorded' && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      children: [previewUrl && /*#__PURE__*/(0, _jsxRuntime.jsx)("audio", {
        ref: audioRef,
        src: previewUrl,
        onEnded: onAudioEnded
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 1
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
          onClick: togglePlayback,
          size: "small",
          color: "primary",
          children: playing ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pause["default"], {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_PlayArrow["default"], {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "caption",
          sx: {
            fontFamily: 'monospace'
          },
          children: formatTime(seconds)
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: 'flex',
          gap: 1
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
          variant: "outlined",
          size: "small",
          color: "error",
          startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DeleteOutline["default"], {}),
          onClick: discardRecording,
          disabled: saving,
          children: "\u05DE\u05D7\u05E7"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
          variant: "outlined",
          size: "small",
          startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Mic["default"], {}),
          onClick: function onClick() {
            discardRecording();
            startRecording();
          },
          disabled: saving,
          children: "\u05D4\u05E7\u05DC\u05D8 \u05DE\u05D7\u05D3\u05E9"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
          variant: "contained",
          size: "small",
          startIcon: saving ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CircularProgress, {
            size: 14
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Save["default"], {}),
          onClick: handleSave,
          disabled: saving,
          children: saving ? 'שומר...' : 'שמור הקלטה'
        })]
      })]
    })]
  });
};
var _default = exports["default"] = AudioRecorder;
//# sourceMappingURL=AudioRecorder.js.map