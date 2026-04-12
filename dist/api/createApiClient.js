"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApiClient = createApiClient;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/**
 * createApiClient — יצירת Axios instance עם interceptors מובנים
 *
 * @param {Object} options
 * @param {string} options.baseURL - כתובת בסיס ל-API (ברירת מחדל: '/api')
 * @param {string} options.refreshEndpoint - נתיב refresh (ברירת מחדל: '/auth/refresh')
 * @param {string} options.storagePrefix - prefix ל-localStorage (ברירת מחדל: 'crm')
 * @param {string} options.loginRedirect - נתיב להפניה בכישלון (ברירת מחדל: '/login')
 * @param {Function} options.onAuthFailure - callback בכישלון אימות (חלופה להפניה)
 * @returns {AxiosInstance}
 */
function createApiClient() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$baseURL = options.baseURL,
    baseURL = _options$baseURL === void 0 ? '/api' : _options$baseURL,
    _options$refreshEndpo = options.refreshEndpoint,
    refreshEndpoint = _options$refreshEndpo === void 0 ? '/auth/refresh' : _options$refreshEndpo,
    _options$storagePrefi = options.storagePrefix,
    storagePrefix = _options$storagePrefi === void 0 ? 'crm' : _options$storagePrefi,
    _options$loginRedirec = options.loginRedirect,
    loginRedirect = _options$loginRedirec === void 0 ? '/login' : _options$loginRedirec,
    onAuthFailure = options.onAuthFailure;
  var tokenKey = "".concat(storagePrefix, "_accessToken");
  var refreshKey = "".concat(storagePrefix, "_refreshToken");
  var api = _axios["default"].create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // Request interceptor — Authorization header
  api.interceptors.request.use(function (config) {
    var token = localStorage.getItem(tokenKey);
    if (token) {
      config.headers.Authorization = "Bearer ".concat(token);
    }
    return config;
  });

  // Response interceptor — token refresh
  var isRefreshing = false;
  var failedQueue = [];
  var processQueue = function processQueue(error) {
    var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    failedQueue.forEach(function (_ref) {
      var resolve = _ref.resolve,
        reject = _ref.reject;
      if (error) reject(error);else resolve(token);
    });
    failedQueue = [];
  };
  api.interceptors.response.use(function (response) {
    return response;
  }, /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(error) {
      var _error$response;
      var originalRequest, refreshToken, _yield$axios$post, data, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            originalRequest = error.config;
            if (!(((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 401 && !originalRequest._retry)) {
              _context.n = 7;
              break;
            }
            if (!isRefreshing) {
              _context.n = 1;
              break;
            }
            return _context.a(2, new Promise(function (resolve, reject) {
              failedQueue.push({
                resolve: resolve,
                reject: reject
              });
            }).then(function (token) {
              originalRequest.headers.Authorization = "Bearer ".concat(token);
              return api(originalRequest);
            }));
          case 1:
            originalRequest._retry = true;
            isRefreshing = true;
            _context.p = 2;
            refreshToken = localStorage.getItem(refreshKey);
            if (refreshToken) {
              _context.n = 3;
              break;
            }
            throw new Error('No refresh token');
          case 3:
            _context.n = 4;
            return _axios["default"].post("".concat(baseURL).concat(refreshEndpoint), {
              refreshToken: refreshToken
            });
          case 4:
            _yield$axios$post = _context.v;
            data = _yield$axios$post.data;
            localStorage.setItem(tokenKey, data.accessToken);
            localStorage.setItem(refreshKey, data.refreshToken);
            processQueue(null, data.accessToken);
            originalRequest.headers.Authorization = "Bearer ".concat(data.accessToken);
            return _context.a(2, api(originalRequest));
          case 5:
            _context.p = 5;
            _t = _context.v;
            processQueue(_t, null);
            localStorage.removeItem(tokenKey);
            localStorage.removeItem(refreshKey);
            if (onAuthFailure) {
              onAuthFailure(_t);
            } else {
              window.location.href = loginRedirect;
            }
            return _context.a(2, Promise.reject(_t));
          case 6:
            _context.p = 6;
            isRefreshing = false;
            return _context.f(6);
          case 7:
            return _context.a(2, Promise.reject(error));
        }
      }, _callee, null, [[2, 5, 6, 7]]);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
  return api;
}
//# sourceMappingURL=createApiClient.js.map