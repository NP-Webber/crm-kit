"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _TableHeader = _interopRequireDefault(require("./TableHeader.js"));
var _TableBody = _interopRequireDefault(require("./TableBody.js"));
var _Pagination = _interopRequireDefault(require("./Pagination.js"));
var _ColumnPicker = _interopRequireDefault(require("./ColumnPicker.js"));
var _ColumnFilter = _interopRequireDefault(require("./ColumnFilter.js"));
var _RowDrawer = _interopRequireDefault(require("./RowDrawer.js"));
require("./TableKit.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /** הערכת תנאי סינון על ערך תא */
var evaluateCondition = function evaluateCondition(cellValue, condition) {
  if (!condition || !condition.operator) return true;
  var operator = condition.operator,
    value = condition.value,
    value2 = condition.value2;
  var cellStr = String(cellValue !== null && cellValue !== void 0 ? cellValue : '').toLowerCase();
  var valStr = String(value !== null && value !== void 0 ? value : '').toLowerCase();
  switch (operator) {
    case 'contains':
      return cellStr.includes(valStr);
    case 'not_contains':
      return !cellStr.includes(valStr);
    case 'equals':
      return cellStr === valStr;
    case 'not_equals':
      return cellStr !== valStr;
    case 'starts_with':
      return cellStr.startsWith(valStr);
    case 'ends_with':
      return cellStr.endsWith(valStr);
    case 'gt':
      return Number(cellValue) > Number(value);
    case 'gte':
      return Number(cellValue) >= Number(value);
    case 'lt':
      return Number(cellValue) < Number(value);
    case 'lte':
      return Number(cellValue) <= Number(value);
    case 'between':
      return Number(cellValue) >= Number(value) && Number(cellValue) <= Number(value2);
    case 'empty':
      return cellValue === null || cellValue === undefined || cellValue === '';
    case 'not_empty':
      return cellValue !== null && cellValue !== undefined && cellValue !== '';
    default:
      return true;
  }
};
var parseWidth = function parseWidth(w) {
  if (!w) return null;
  if (typeof w === 'number') return w;
  var n = parseInt(w, 10);
  return isNaN(n) ? null : n;
};

/**
 * TableKit — רכיב טבלה עצמאי מלא
 *
 * @param {Object} props
 * @param {Array} props.columns - הגדרות עמודות:
 *   { key, title, width?, minWidth?, align?, render?(value,row), sortable?, filterable? }
 * @param {Array} props.data - מערך נתונים
 * @param {number} props.total - סה"כ רשומות (server-side)
 * @param {boolean} props.loading
 * @param {Function} props.onFetch - callback({ page, pageSize, sort, order, filters })
 * @param {string} props.emptyMessage
 * @param {boolean} props.showColumnPicker - הצגת בורר עמודות (ברירת מחדל: true)
 * @param {boolean} props.showExport - הצגת כפתור CSV (ברירת מחדל: true)
 * @param {boolean} props.showFilters - הצגת שורת סינון (ברירת מחדל: true)
 * @param {string} props.exportFileName - שם קובץ CSV
 * @param {Function} props.onRowDoubleClick - callback(row) — אם לא מסופק, נפתחת חלונית ברירת מחדל
 * @param {Function} props.renderDrawerDetail - רינדור מותאם לחלונית (row) => JSX
 * @param {Function} props.onOpenCard - callback(row) — כפתור "פתח כרטיסיה" בתחתית ה-RowDrawer
 * @param {Function} props.fetchValuesFor - async (colKey) => string[]  — שליפת ערכים ייחודיים מהשרת
 * @param {boolean} props.clientSideMode - עיבוד מקומי (סינון, מיון, דפדוף)
 * @param {Function} props.onExportFetch - שליפת כל הנתונים ליצוא (server-side)
 * @param {boolean} props.urlSync - סנכרון state עם URL params (ברירת מחדל: true)
 * @param {Function} props.onStateChange - callback({ page, pageSize, sort, order, filters }) — חלופה ל-URL sync
 * @param {boolean} props.showSearch - הצגת תיבת חיפוש גלובלית (ברירת מחדל: true)
 * @param {string} props.searchPlaceholder - placeholder לתיבת חיפוש
 */
var TableKit = function TableKit(_ref) {
  var _ref$columns = _ref.columns,
    columns = _ref$columns === void 0 ? [] : _ref$columns,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    _ref$total = _ref.total,
    total = _ref$total === void 0 ? 0 : _ref$total,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    onFetch = _ref.onFetch,
    _ref$emptyMessage = _ref.emptyMessage,
    emptyMessage = _ref$emptyMessage === void 0 ? 'אין נתונים להצגה' : _ref$emptyMessage,
    _ref$showColumnPicker = _ref.showColumnPicker,
    showColumnPicker = _ref$showColumnPicker === void 0 ? true : _ref$showColumnPicker,
    _ref$showExport = _ref.showExport,
    showExport = _ref$showExport === void 0 ? true : _ref$showExport,
    _ref$showFilters = _ref.showFilters,
    showFilters = _ref$showFilters === void 0 ? true : _ref$showFilters,
    _ref$showSearch = _ref.showSearch,
    showSearch = _ref$showSearch === void 0 ? true : _ref$showSearch,
    _ref$searchPlaceholde = _ref.searchPlaceholder,
    searchPlaceholder = _ref$searchPlaceholde === void 0 ? 'חיפוש...' : _ref$searchPlaceholde,
    _ref$exportFileName = _ref.exportFileName,
    exportFileName = _ref$exportFileName === void 0 ? 'export' : _ref$exportFileName,
    onRowDoubleClick = _ref.onRowDoubleClick,
    renderDrawerDetail = _ref.renderDrawerDetail,
    onOpenCard = _ref.onOpenCard,
    fetchValuesFor = _ref.fetchValuesFor,
    resetPageTrigger = _ref.resetPageTrigger,
    allColumnsForPicker = _ref.allColumnsForPicker,
    visibleColumnKeys = _ref.visibleColumnKeys,
    onVisibleColumnsChange = _ref.onVisibleColumnsChange,
    _ref$clientSideMode = _ref.clientSideMode,
    clientSideMode = _ref$clientSideMode === void 0 ? false : _ref$clientSideMode,
    onExportFetch = _ref.onExportFetch,
    _ref$urlSync = _ref.urlSync,
    urlSync = _ref$urlSync === void 0 ? true : _ref$urlSync,
    onStateChange = _ref.onStateChange;
  // URL sync — אופציונלי (נשתמש ב-hook רק אם urlSync=true)
  // אם אין react-router — שומרים state רגיל
  var searchParams, setSearchParams;
  try {
    if (urlSync) {
      var mod = require('react-router-dom');
      var _mod$useSearchParams = mod.useSearchParams();
      var _mod$useSearchParams2 = _slicedToArray(_mod$useSearchParams, 2);
      searchParams = _mod$useSearchParams2[0];
      setSearchParams = _mod$useSearchParams2[1];
    }
  } catch (_unused) {
    // react-router not available
  }
  var getParam = function getParam(key, defaultVal) {
    if (searchParams) return searchParams.get(key) || defaultVal;
    return defaultVal;
  };
  var _useState = (0, _react.useState)(function () {
      return parseInt(getParam('page', '1'), 10);
    }),
    _useState2 = _slicedToArray(_useState, 2),
    page = _useState2[0],
    setPage = _useState2[1];
  var _useState3 = (0, _react.useState)(function () {
      return parseInt(getParam('pageSize', '100'), 10);
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    pageSize = _useState4[0],
    setPageSize = _useState4[1];
  var _useState5 = (0, _react.useState)(function () {
      return getParam('sort', '');
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    sortKey = _useState6[0],
    setSortKey = _useState6[1];
  var _useState7 = (0, _react.useState)(function () {
      return getParam('order', 'asc');
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    sortOrder = _useState8[0],
    setSortOrder = _useState8[1];
  var _useState9 = (0, _react.useState)(function () {
      var f = {};
      columns.forEach(function (col) {
        if (col.filterable !== false) {
          f[col.key] = getParam("f_".concat(col.key), '');
        }
      });
      return f;
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    filters = _useState0[0],
    setFilters = _useState0[1];
  var _useState1 = (0, _react.useState)(function () {
      return getParam('q', '');
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    globalSearch = _useState10[0],
    setGlobalSearch = _useState10[1];
  var _useState11 = (0, _react.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    valueFilters = _useState12[0],
    setValueFilters = _useState12[1];
  var _useState13 = (0, _react.useState)({}),
    _useState14 = _slicedToArray(_useState13, 2),
    pinnedFilters = _useState14[0],
    setPinnedFilters = _useState14[1];
  var _useState15 = (0, _react.useState)({}),
    _useState16 = _slicedToArray(_useState15, 2),
    conditionFilters = _useState16[0],
    setConditionFilters = _useState16[1];
  var colWidthsKey = "".concat(exportFileName || 'tablekit', ":colwidths");
  var _useState17 = (0, _react.useState)(function () {
      try {
        var saved = localStorage.getItem(colWidthsKey);
        return saved ? JSON.parse(saved) : {};
      } catch (_unused2) {
        return {};
      }
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    columnWidths = _useState18[0],
    setColumnWidths = _useState18[1];
  var handleColumnResize = (0, _react.useCallback)(function (key, width) {
    setColumnWidths(function (prev) {
      var next = _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, Math.max(40, Math.round(width))));
      try {
        localStorage.setItem(colWidthsKey, JSON.stringify(next));
      } catch (_unused3) {}
      return next;
    });
  }, [colWidthsKey]);
  var resetColumnWidths = (0, _react.useCallback)(function () {
    setColumnWidths({});
    try {
      localStorage.removeItem(colWidthsKey);
    } catch (_unused4) {}
  }, [colWidthsKey]);
  var isFirstResetRef = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    if (isFirstResetRef.current) {
      isFirstResetRef.current = false;
      return;
    }
    setPage(1);
  }, [resetPageTrigger]);
  var prevDataLenRef = (0, _react.useRef)(data.length);
  (0, _react.useEffect)(function () {
    if (clientSideMode && data.length !== prevDataLenRef.current) {
      prevDataLenRef.current = data.length;
      setPage(1);
    }
  }, [clientSideMode, data.length]);
  var hasCustomWidths = Object.keys(columnWidths).length > 0;
  var _useState19 = (0, _react.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    drawerRow = _useState20[0],
    setDrawerRow = _useState20[1];

  // Filter popup state — open from header icon
  var _useState21 = (0, _react.useState)(null),
    _useState22 = _slicedToArray(_useState21, 2),
    openFilterCol = _useState22[0],
    setOpenFilterCol = _useState22[1];
  var _useState23 = (0, _react.useState)({
      top: 0,
      right: 0
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    filterPopupPos = _useState24[0],
    setFilterPopupPos = _useState24[1];
  var getFilterState = (0, _react.useCallback)(function (colKey) {
    return !!(filters[colKey] || valueFilters[colKey] && valueFilters[colKey].length > 0 || pinnedFilters[colKey] && pinnedFilters[colKey].length > 0 || conditionFilters[colKey] && conditionFilters[colKey].operator);
  }, [filters, valueFilters, pinnedFilters, conditionFilters]);
  var handleFilterIconClick = (0, _react.useCallback)(function (colKey, e) {
    e.stopPropagation();
    if (openFilterCol === colKey) {
      setOpenFilterCol(null);
      return;
    }
    var rect = e.currentTarget.getBoundingClientRect();
    setFilterPopupPos({
      top: rect.bottom + 4,
      right: Math.max(4, window.innerWidth - rect.right - 20)
    });
    setOpenFilterCol(colKey);
  }, [openFilterCol]);
  var handleFilterPopupClose = (0, _react.useCallback)(function () {
    setOpenFilterCol(null);
  }, []);

  // Drag-to-scroll for horizontal and vertical scrolling
  var containerRef = (0, _react.useRef)(null);
  var dragState = (0, _react.useRef)({
    isDragging: false,
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0
  });
  var handleMouseDown = (0, _react.useCallback)(function (e) {
    var container = containerRef.current;
    if (!container) return;
    // Don't hijack drags on interactive elements
    var tag = e.target.tagName;
    if (tag === 'INPUT' || tag === 'SELECT' || tag === 'BUTTON' || tag === 'TEXTAREA' || e.target.closest('.tablekit-resize-handle') || e.target.closest('.tablekit-th-filter-icon') || e.target.closest('.tablekit-col-filter-dropdown') || e.target.closest('button') || e.target.closest('select') || e.target.closest('input')) return;
    // Only activate if table is scrollable
    var canScrollX = container.scrollWidth > container.clientWidth;
    var canScrollY = container.scrollHeight > container.clientHeight;
    if (!canScrollX && !canScrollY) return;
    dragState.current = {
      isDragging: true,
      startX: e.pageX,
      startY: e.pageY,
      scrollLeft: container.scrollLeft,
      scrollTop: container.scrollTop
    };
    container.style.cursor = 'grabbing';
    container.style.userSelect = 'none';
  }, []);
  var handleMouseUp = (0, _react.useCallback)(function () {
    var container = containerRef.current;
    if (!container || !dragState.current.isDragging) return;
    dragState.current.isDragging = false;
    var canScroll = container.scrollWidth > container.clientWidth || container.scrollHeight > container.clientHeight;
    container.style.cursor = canScroll ? 'grab' : '';
    container.style.userSelect = '';
  }, []);
  var handleMouseMove = (0, _react.useCallback)(function (e) {
    if (!dragState.current.isDragging) return;
    var container = containerRef.current;
    if (!container) return;
    e.preventDefault();
    var walkX = (e.pageX - dragState.current.startX) * 1.5;
    var walkY = (e.pageY - dragState.current.startY) * 1.5;
    container.scrollLeft = dragState.current.scrollLeft - walkX;
    container.scrollTop = dragState.current.scrollTop - walkY;
  }, []);
  (0, _react.useEffect)(function () {
    document.addEventListener('mouseup', handleMouseUp);
    return function () {
      return document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseUp]);
  var _useState25 = (0, _react.useState)(function () {
      return columns.map(function (c) {
        return c.key;
      });
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    visibleKeys = _useState26[0],
    setVisibleKeys = _useState26[1];
  var columnKeysStr = columns.map(function (c) {
    return c.key;
  }).join(',');
  (0, _react.useEffect)(function () {
    setVisibleKeys(columnKeysStr.split(',').filter(Boolean));
  }, [columnKeysStr]);
  var visibleColumns = (0, _react.useMemo)(function () {
    return columns.filter(function (c) {
      return visibleKeys.includes(c.key);
    });
  }, [columns, visibleKeys]);

  // Client-side processing
  var processedData = (0, _react.useMemo)(function () {
    if (!clientSideMode) return null;
    var result = _toConsumableArray(data);

    // Global search — כל מילה יכולה להתאים בעמודה אחרת
    if (globalSearch.trim()) {
      var words = globalSearch.trim().toLowerCase().split(/\s+/);
      result = result.filter(function (row) {
        return words.every(function (word) {
          return columns.some(function (col) {
            var _row$col$key;
            var val = String((_row$col$key = row[col.key]) !== null && _row$col$key !== void 0 ? _row$col$key : '').toLowerCase();
            return val.includes(word);
          });
        });
      });
    }
    var allFilterKeys = new Set([].concat(_toConsumableArray(Object.keys(filters)), _toConsumableArray(Object.keys(pinnedFilters))));
    allFilterKeys.forEach(function (k) {
      var text = filters[k] || '';
      var pins = pinnedFilters[k] || [];
      var terms = [].concat(_toConsumableArray(pins), [text]).filter(Boolean);
      if (terms.length === 0) return;
      result = result.filter(function (row) {
        var val = String(row[k] || '').toLowerCase();
        return terms.some(function (t) {
          return val.includes(t.toLowerCase());
        });
      });
    });
    Object.entries(valueFilters).forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        vals = _ref3[1];
      if (!vals || vals.length === 0) return;
      result = result.filter(function (row) {
        return vals.includes(String(row[key]));
      });
    });
    Object.entries(conditionFilters).forEach(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
        key = _ref5[0],
        cond = _ref5[1];
      if (!cond || !cond.operator) return;
      result = result.filter(function (row) {
        return evaluateCondition(row[key], cond);
      });
    });
    if (sortKey) {
      result.sort(function (a, b) {
        var va = String(a[sortKey] || '').toLowerCase();
        var vb = String(b[sortKey] || '').toLowerCase();
        var na = Number(va),
          nb = Number(vb);
        if (!isNaN(na) && !isNaN(nb)) return sortOrder === 'asc' ? na - nb : nb - na;
        return sortOrder === 'asc' ? va.localeCompare(vb, 'he') : vb.localeCompare(va, 'he');
      });
    }
    return result;
  }, [clientSideMode, data, globalSearch, columns, filters, pinnedFilters, valueFilters, conditionFilters, sortKey, sortOrder]);
  var filteredData = (0, _react.useMemo)(function () {
    if (clientSideMode) return processedData || [];
    if (Object.keys(valueFilters).length === 0) return data;
    return data.filter(function (row) {
      return Object.entries(valueFilters).every(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
          key = _ref7[0],
          vals = _ref7[1];
        if (!vals || vals.length === 0) return true;
        return vals.includes(String(row[key]));
      });
    });
  }, [clientSideMode, processedData, data, valueFilters]);
  var pagedData = (0, _react.useMemo)(function () {
    if (!clientSideMode) return filteredData;
    var start = (page - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [clientSideMode, filteredData, page, pageSize]);
  var clientTotal = clientSideMode ? filteredData.length : total;
  var updateUrl = (0, _react.useCallback)(function (newState) {
    if (!setSearchParams) return;
    var params = new URLSearchParams(searchParams);
    Object.entries(newState).forEach(function (_ref8) {
      var _ref9 = _slicedToArray(_ref8, 2),
        k = _ref9[0],
        v = _ref9[1];
      if (v && v !== '' && v !== '1' && k !== 'page') {
        params.set(k, String(v));
      } else if (k === 'page') {
        params.set(k, String(v));
      } else {
        params["delete"](k);
      }
    });
    setSearchParams(params, {
      replace: true
    });
  }, [searchParams, setSearchParams]);
  var doFetch = (0, _react.useCallback)(function () {
    if (clientSideMode || !onFetch) return;
    var activeFilters = {};
    var allKeys = new Set([].concat(_toConsumableArray(Object.keys(filters)), _toConsumableArray(Object.keys(pinnedFilters))));
    allKeys.forEach(function (k) {
      var text = filters[k] || '';
      var pins = pinnedFilters[k] || [];
      if (pins.length > 0 && text) {
        activeFilters[k] = [].concat(_toConsumableArray(pins), [text]).join('|');
      } else if (pins.length > 0) {
        activeFilters[k] = pins.join('|');
      } else if (text) {
        activeFilters[k] = text;
      }
    });
    onFetch({
      page: page,
      pageSize: pageSize,
      sort: sortKey,
      order: sortOrder,
      filters: activeFilters,
      valueFilters: valueFilters,
      conditionFilters: conditionFilters,
      search: globalSearch || undefined
    });
  }, [clientSideMode, onFetch, page, pageSize, sortKey, sortOrder, filters, valueFilters, pinnedFilters, conditionFilters, globalSearch]);
  (0, _react.useEffect)(function () {
    doFetch();
  }, [doFetch]);

  // Sort handler — 3-click cycle: asc → desc → clear
  var handleSort = function handleSort(key) {
    if (sortKey === key) {
      if (sortOrder === 'asc') {
        setSortOrder('desc');
        setPage(1);
        updateUrl({
          sort: key,
          order: 'desc',
          page: 1
        });
      } else {
        setSortKey('');
        setSortOrder('asc');
        setPage(1);
        updateUrl({
          sort: '',
          order: '',
          page: 1
        });
      }
    } else {
      setSortKey(key);
      setSortOrder('asc');
      setPage(1);
      updateUrl({
        sort: key,
        order: 'asc',
        page: 1
      });
    }
  };
  var handlePageChange = function handlePageChange(newPage) {
    setPage(newPage);
    updateUrl({
      page: newPage
    });
  };
  var handlePageSizeChange = function handlePageSizeChange(newSize) {
    setPageSize(newSize);
    setPage(1);
    updateUrl({
      pageSize: newSize,
      page: 1
    });
  };
  var handleFilterChange = function handleFilterChange(key, value) {
    var newFilters = _objectSpread(_objectSpread({}, filters), {}, _defineProperty({}, key, value));
    setFilters(newFilters);
    setPage(1);
    var urlState = {
      page: 1
    };
    Object.entries(newFilters).forEach(function (_ref0) {
      var _ref1 = _slicedToArray(_ref0, 2),
        k = _ref1[0],
        v = _ref1[1];
      urlState["f_".concat(k)] = v;
    });
    updateUrl(urlState);
  };
  var handleValueFilterChange = function handleValueFilterChange(key, values) {
    setValueFilters(function (prev) {
      var next = _objectSpread({}, prev);
      if (!values || values.length === 0) {
        delete next[key];
      } else {
        next[key] = values;
      }
      return next;
    });
    setPage(1);
  };
  var handlePinnedTextsChange = function handlePinnedTextsChange(key, values) {
    setPinnedFilters(function (prev) {
      var next = _objectSpread({}, prev);
      if (!values || values.length === 0) {
        delete next[key];
      } else {
        next[key] = values;
      }
      return next;
    });
    setPage(1);
  };
  var handleConditionFilterChange = function handleConditionFilterChange(key, condition) {
    setConditionFilters(function (prev) {
      var next = _objectSpread({}, prev);
      if (!condition) {
        delete next[key];
      } else {
        next[key] = condition;
      }
      return next;
    });
    setPage(1);
  };
  var handleGlobalSearchChange = function handleGlobalSearchChange(e) {
    var val = e.target.value;
    setGlobalSearch(val);
    setPage(1);
    updateUrl({
      q: val,
      page: 1
    });
  };
  var hasActiveFilters = Object.values(filters).some(Boolean) || Object.keys(valueFilters).length > 0 || Object.keys(pinnedFilters).length > 0 || Object.keys(conditionFilters).length > 0 || globalSearch.trim() !== '';
  var clearAllFilters = (0, _react.useCallback)(function () {
    var emptyFilters = {};
    columns.forEach(function (col) {
      if (col.filterable !== false) emptyFilters[col.key] = '';
    });
    setFilters(emptyFilters);
    setValueFilters({});
    setPinnedFilters({});
    setConditionFilters({});
    setGlobalSearch('');
    setPage(1);
    var urlState = {
      page: 1
    };
    columns.forEach(function (col) {
      if (col.filterable !== false) urlState["f_".concat(col.key)] = '';
    });
    updateUrl(urlState);
  }, [columns, updateUrl]);
  var handleRowDoubleClick = function handleRowDoubleClick(row) {
    if (onRowDoubleClick) {
      onRowDoubleClick(row);
    } else {
      setDrawerRow(row);
    }
  };

  // CSV Export
  var _useState27 = (0, _react.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    exporting = _useState28[0],
    setExporting = _useState28[1];
  var handleExport = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var exportData, activeFilters, allKeys, header, rows, BOM, csvContent, blob, url, link, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!clientSideMode) {
              _context.n = 1;
              break;
            }
            exportData = filteredData;
            _context.n = 8;
            break;
          case 1:
            if (!onExportFetch) {
              _context.n = 7;
              break;
            }
            _context.p = 2;
            setExporting(true);
            activeFilters = {};
            allKeys = new Set([].concat(_toConsumableArray(Object.keys(filters)), _toConsumableArray(Object.keys(pinnedFilters))));
            allKeys.forEach(function (k) {
              var text = filters[k] || '';
              var pins = pinnedFilters[k] || [];
              if (pins.length > 0 && text) {
                activeFilters[k] = [].concat(_toConsumableArray(pins), [text]).join('|');
              } else if (pins.length > 0) {
                activeFilters[k] = pins.join('|');
              } else if (text) {
                activeFilters[k] = text;
              }
            });
            _context.n = 3;
            return onExportFetch({
              sort: sortKey,
              order: sortOrder,
              filters: activeFilters,
              valueFilters: valueFilters,
              conditionFilters: conditionFilters
            });
          case 3:
            exportData = _context.v;
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            console.error('שגיאה בייצוא:', _t);
            return _context.a(2);
          case 5:
            _context.p = 5;
            setExporting(false);
            return _context.f(5);
          case 6:
            _context.n = 8;
            break;
          case 7:
            exportData = data;
          case 8:
            header = visibleColumns.map(function (c) {
              return c.title;
            }).join(',');
            rows = exportData.map(function (row) {
              return visibleColumns.map(function (col) {
                var val = row[col.key];
                if (val === null || val === undefined) val = '';
                if (_typeof(val) === 'object') val = JSON.stringify(val);
                val = String(val).replace(/"/g, '""');
                return "\"".concat(val, "\"");
              }).join(',');
            });
            BOM = "\uFEFF";
            csvContent = BOM + [header].concat(_toConsumableArray(rows)).join('\n');
            blob = new Blob([csvContent], {
              type: 'text/csv;charset=utf-8;'
            });
            url = URL.createObjectURL(blob);
            link = document.createElement('a');
            link.href = url;
            link.download = "".concat(exportFileName, ".csv");
            link.click();
            URL.revokeObjectURL(url);
          case 9:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4, 5, 6]]);
    }));
    return function handleExport() {
      return _ref10.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "tablekit-wrapper",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "tablekit-toolbar",
      children: [showSearch && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "tablekit-search-box",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "tablekit-search-icon",
          children: "\uD83D\uDD0D"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "text",
          className: "tablekit-search-input",
          placeholder: searchPlaceholder,
          value: globalSearch,
          onChange: handleGlobalSearchChange
        }), globalSearch && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          className: "tablekit-search-clear",
          onClick: function onClick() {
            setGlobalSearch('');
            setPage(1);
            updateUrl({
              q: '',
              page: 1
            });
          },
          title: "\u05E0\u05E7\u05D4 \u05D7\u05D9\u05E4\u05D5\u05E9",
          children: "\u2715"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "tablekit-toolbar-right",
        children: [showColumnPicker && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColumnPicker["default"], {
          allColumns: allColumnsForPicker || columns,
          visibleKeys: allColumnsForPicker ? visibleColumnKeys || visibleKeys : visibleKeys,
          onChange: allColumnsForPicker ? onVisibleColumnsChange || setVisibleKeys : setVisibleKeys
        }), showExport && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "tablekit-export-btn",
          onClick: handleExport,
          disabled: exporting || (!filteredData || filteredData.length === 0) && !onExportFetch,
          type: "button",
          children: exporting ? 'מייצא...' : 'ייצוא CSV'
        }), showFilters && hasActiveFilters && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "tablekit-clear-filters-btn",
          onClick: clearAllFilters,
          type: "button",
          title: "\u05E0\u05E7\u05D4 \u05D0\u05EA \u05DB\u05DC \u05D4\u05E1\u05D9\u05E0\u05D5\u05E0\u05D9\u05DD",
          children: "\u2715 \u05E0\u05E7\u05D4 \u05E1\u05D9\u05E0\u05D5\u05DF"
        }), hasCustomWidths && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "tablekit-reset-widths-btn",
          onClick: resetColumnWidths,
          type: "button",
          title: "\u05D0\u05E4\u05E1 \u05E8\u05D5\u05D7\u05D1\u05D9 \u05E2\u05DE\u05D5\u05D3\u05D5\u05EA \u05DC\u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC",
          children: "\u21D4 \u05D0\u05E4\u05E1 \u05E8\u05D5\u05D7\u05D1\u05D9\u05DD"
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "tablekit-container",
      ref: containerRef,
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseUp,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("table", {
        className: "tablekit-table",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("colgroup", {
          children: visibleColumns.map(function (col) {
            var customW = columnWidths[col.key];
            var defW = parseWidth(col.width) || parseWidth(col.minWidth);
            var w = customW || defW;
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("col", {
              style: w ? {
                width: "".concat(w, "px")
              } : {}
            }, col.key);
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableHeader["default"], {
          columns: visibleColumns,
          sortKey: sortKey,
          sortOrder: sortOrder,
          onSort: handleSort,
          columnWidths: columnWidths,
          onColumnResize: handleColumnResize,
          filterState: getFilterState,
          onFilterIconClick: handleFilterIconClick,
          activeFilterCol: openFilterCol,
          pinnedFilters: pinnedFilters,
          conditionFilters: conditionFilters,
          valueFilters: valueFilters,
          onRemovePin: function onRemovePin(colKey, pin) {
            return handlePinnedTextsChange(colKey, (pinnedFilters[colKey] || []).filter(function (p) {
              return p !== pin;
            }));
          }
        }), showFilters && /*#__PURE__*/(0, _jsxRuntime.jsx)("thead", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
            className: "tablekit-filter-row",
            children: visibleColumns.map(function (col) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                className: "tablekit-filter-cell",
                children: col.filterable !== false ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColumnFilter["default"], {
                  col: col,
                  data: data,
                  textValue: filters[col.key] || '',
                  selectedValues: valueFilters[col.key] || [],
                  onTextChange: handleFilterChange,
                  onValuesChange: handleValueFilterChange,
                  fetchValues: fetchValuesFor ? fetchValuesFor(col.key) : undefined,
                  pinnedTexts: pinnedFilters[col.key] || [],
                  onPinnedTextsChange: handlePinnedTextsChange,
                  conditionFilter: conditionFilters[col.key] || null,
                  onConditionFilterChange: handleConditionFilterChange
                }) : null
              }, col.key);
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableBody["default"], {
          data: clientSideMode ? pagedData : filteredData,
          columns: visibleColumns,
          loading: loading,
          emptyMessage: emptyMessage,
          onRowDoubleClick: handleRowDoubleClick
        })]
      })
    }), openFilterCol && function () {
      var col = visibleColumns.find(function (c) {
        return c.key === openFilterCol;
      });
      if (!col || col.filterable === false) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          position: 'fixed',
          top: filterPopupPos.top,
          right: filterPopupPos.right,
          zIndex: 9999,
          minWidth: 260,
          background: '#fff',
          border: '1px solid #c5cae9',
          borderRadius: 8,
          boxShadow: '0 4px 20px rgba(21,101,192,0.18)',
          padding: '8px'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColumnFilter["default"], {
          col: col,
          data: data,
          textValue: filters[col.key] || '',
          selectedValues: valueFilters[col.key] || [],
          onTextChange: handleFilterChange,
          onValuesChange: handleValueFilterChange,
          fetchValues: fetchValuesFor ? fetchValuesFor(col.key) : undefined,
          pinnedTexts: pinnedFilters[col.key] || [],
          onPinnedTextsChange: handlePinnedTextsChange,
          conditionFilter: conditionFilters[col.key] || null,
          onConditionFilterChange: handleConditionFilterChange,
          defaultOpen: false,
          onClose: handleFilterPopupClose
        }, "popup-".concat(openFilterCol))
      }, "popup-wrap-".concat(openFilterCol));
    }(), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pagination["default"], {
      page: page,
      pageSize: pageSize,
      total: clientTotal,
      onPageChange: handlePageChange,
      onPageSizeChange: handlePageSizeChange
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowDrawer["default"], {
      open: !!drawerRow,
      onClose: function onClose() {
        return setDrawerRow(null);
      },
      row: drawerRow,
      columns: visibleColumns,
      renderDetail: renderDrawerDetail,
      onOpenCard: onOpenCard
    })]
  });
};
var _default = exports["default"] = TableKit;
//# sourceMappingURL=TableKit.js.map