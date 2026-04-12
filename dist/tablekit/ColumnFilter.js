"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.OPERATORS = void 0;
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
var OPERATORS = exports.OPERATORS = [{
  key: 'contains',
  label: 'מכיל',
  needsValue: true
}, {
  key: 'not_contains',
  label: 'לא מכיל',
  needsValue: true
}, {
  key: 'equals',
  label: 'שווה ל',
  needsValue: true
}, {
  key: 'not_equals',
  label: 'שונה מ',
  needsValue: true
}, {
  key: 'starts_with',
  label: 'מתחיל ב',
  needsValue: true
}, {
  key: 'ends_with',
  label: 'מסתיים ב',
  needsValue: true
}, {
  key: 'gt',
  label: 'גדול מ',
  needsValue: true,
  numeric: true
}, {
  key: 'gte',
  label: 'גדול או שווה ל',
  needsValue: true,
  numeric: true
}, {
  key: 'lt',
  label: 'קטן מ',
  needsValue: true,
  numeric: true
}, {
  key: 'lte',
  label: 'קטן או שווה ל',
  needsValue: true,
  numeric: true
}, {
  key: 'between',
  label: 'בין',
  needsValue: true,
  needsValue2: true,
  numeric: true
}, {
  key: 'empty',
  label: 'ריק',
  needsValue: false
}, {
  key: 'not_empty',
  label: 'לא ריק',
  needsValue: false
}];
var ColumnFilter = function ColumnFilter(_ref) {
  var _OPERATORS$find;
  var col = _ref.col,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    _ref$textValue = _ref.textValue,
    textValue = _ref$textValue === void 0 ? '' : _ref$textValue,
    _ref$selectedValues = _ref.selectedValues,
    selectedValues = _ref$selectedValues === void 0 ? [] : _ref$selectedValues,
    onTextChange = _ref.onTextChange,
    onValuesChange = _ref.onValuesChange,
    fetchValues = _ref.fetchValues,
    _ref$pinnedTexts = _ref.pinnedTexts,
    pinnedTexts = _ref$pinnedTexts === void 0 ? [] : _ref$pinnedTexts,
    onPinnedTextsChange = _ref.onPinnedTextsChange,
    conditionFilter = _ref.conditionFilter,
    onConditionFilterChange = _ref.onConditionFilterChange;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    search = _useState4[0],
    setSearch = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    serverValues = _useState6[0],
    setServerValues = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    loadingValues = _useState8[0],
    setLoadingValues = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    isAllDeselected = _useState0[0],
    setIsAllDeselected = _useState0[1];
  var _useState1 = (0, _react.useState)({
      top: 0,
      right: 0
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    dropdownPos = _useState10[0],
    setDropdownPos = _useState10[1];
  var _useState11 = (0, _react.useState)('values'),
    _useState12 = _slicedToArray(_useState11, 2),
    tab = _useState12[0],
    setTab = _useState12[1];
  var _useState13 = (0, _react.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    condOp = _useState14[0],
    setCondOp = _useState14[1];
  var _useState15 = (0, _react.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    condVal = _useState16[0],
    setCondVal = _useState16[1];
  var _useState17 = (0, _react.useState)(''),
    _useState18 = _slicedToArray(_useState17, 2),
    condVal2 = _useState18[0],
    setCondVal2 = _useState18[1];
  var ref = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    setCondOp((conditionFilter === null || conditionFilter === void 0 ? void 0 : conditionFilter.operator) || '');
    setCondVal((conditionFilter === null || conditionFilter === void 0 ? void 0 : conditionFilter.value) || '');
    setCondVal2((conditionFilter === null || conditionFilter === void 0 ? void 0 : conditionFilter.value2) || '');
  }, [conditionFilter]);
  (0, _react.useEffect)(function () {
    var handler = function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return function () {
      return document.removeEventListener('mousedown', handler);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (!open) setIsAllDeselected(false);
  }, [open]);
  var loadValues = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var vals, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!(fetchValues && serverValues === null && !loadingValues)) {
              _context.n = 5;
              break;
            }
            setLoadingValues(true);
            _context.p = 1;
            _context.n = 2;
            return fetchValues();
          case 2:
            vals = _context.v;
            setServerValues(Array.isArray(vals) ? vals : []);
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setServerValues([]);
          case 4:
            _context.p = 4;
            setLoadingValues(false);
            return _context.f(4);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3, 4, 5]]);
    }));
    return function loadValues() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleOpen = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var next, rect;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            next = !open;
            setOpen(next);
            if (next && ref.current) {
              rect = ref.current.getBoundingClientRect();
              setDropdownPos({
                top: rect.bottom + 2,
                right: Math.max(4, window.innerWidth - rect.right)
              });
            }
            if (!(next && tab === 'values')) {
              _context2.n = 1;
              break;
            }
            _context2.n = 1;
            return loadValues();
          case 1:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function handleOpen() {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleTabChange = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(newTab) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            setTab(newTab);
            if (!(newTab === 'values')) {
              _context3.n = 1;
              break;
            }
            _context3.n = 1;
            return loadValues();
          case 1:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function handleTabChange(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  var allValues = (0, _react.useMemo)(function () {
    if (serverValues !== null) return serverValues;
    var seen = new Set();
    data.forEach(function (row) {
      var v = row[col.key];
      if (v !== null && v !== undefined && v !== '') seen.add(String(v));
    });
    return _toConsumableArray(seen).sort();
  }, [serverValues, data, col.key]);
  var filtered = search ? allValues.filter(function (v) {
    return v.toLowerCase().includes(search.toLowerCase());
  }) : allValues;
  var hasCondition = !!(conditionFilter !== null && conditionFilter !== void 0 && conditionFilter.operator);
  var isActive = textValue || selectedValues.length > 0 || pinnedTexts.length > 0 || hasCondition;
  var toggleValue = function toggleValue(v) {
    var next = selectedValues.includes(v) ? selectedValues.filter(function (x) {
      return x !== v;
    }) : [].concat(_toConsumableArray(selectedValues), [v]);
    onValuesChange(col.key, next);
  };
  var selectAll = function selectAll() {
    setIsAllDeselected(false);
    onValuesChange(col.key, []);
  };
  var clearAll = function clearAll() {
    onTextChange(col.key, '');
    onValuesChange(col.key, []);
    if (onPinnedTextsChange) onPinnedTextsChange(col.key, []);
    if (onConditionFilterChange) onConditionFilterChange(col.key, null);
    setCondOp('');
    setCondVal('');
    setCondVal2('');
    setSearch('');
    setOpen(false);
  };
  var pinText = function pinText() {
    var val = textValue.trim();
    if (!val || !onPinnedTextsChange) return;
    if (!pinnedTexts.includes(val)) {
      onPinnedTextsChange(col.key, [].concat(_toConsumableArray(pinnedTexts), [val]));
    }
    onTextChange(col.key, '');
  };
  var removePin = function removePin(val) {
    onPinnedTextsChange(col.key, pinnedTexts.filter(function (p) {
      return p !== val;
    }));
  };
  var applyCondition = function applyCondition() {
    if (!condOp) {
      if (onConditionFilterChange) onConditionFilterChange(col.key, null);
    } else {
      if (onConditionFilterChange) onConditionFilterChange(col.key, {
        operator: condOp,
        value: condVal,
        value2: condVal2
      });
    }
    setOpen(false);
  };
  var clearCondition = function clearCondition() {
    setCondOp('');
    setCondVal('');
    setCondVal2('');
    if (onConditionFilterChange) onConditionFilterChange(col.key, null);
  };
  var currentOp = OPERATORS.find(function (o) {
    return o.key === condOp;
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "tablekit-col-filter",
    ref: ref,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "tablekit-col-filter-row",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        className: "tablekit-filter-input ".concat(isActive ? 'active' : ''),
        type: "text",
        placeholder: "".concat(col.title, "..."),
        value: textValue,
        onChange: function onChange(e) {
          return onTextChange(col.key, e.target.value);
        },
        onKeyDown: function onKeyDown(e) {
          if (e.key === 'Enter') pinText();
        }
      }), onPinnedTextsChange && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "tablekit-col-pin-btn".concat(textValue.trim() ? ' ready' : ''),
        type: "button",
        title: "\u05E0\u05E2\u05E5 \u05D7\u05D9\u05E4\u05D5\u05E9 \u05D6\u05D4 (Enter)",
        onClick: pinText,
        children: "\uD83D\uDCCC"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "tablekit-col-filter-btn".concat(selectedValues.length > 0 || hasCondition ? ' active' : ''),
        type: "button",
        title: "\u05E1\u05E0\u05DF \u05DC\u05E4\u05D9 \u05E2\u05E8\u05DB\u05D9\u05DD \u05D0\u05D5 \u05EA\u05E0\u05D0\u05D9",
        onClick: handleOpen,
        children: selectedValues.length > 0 ? "\u25BC".concat(selectedValues.length) : hasCondition ? '▼✦' : '⌄'
      })]
    }), pinnedTexts.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "tablekit-pin-chips",
      children: pinnedTexts.map(function (p) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          className: "tablekit-pin-chip",
          title: p,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "tablekit-pin-chip-text",
            children: p
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            className: "tablekit-pin-chip-remove",
            onClick: function onClick() {
              return removePin(p);
            },
            title: "\u05D4\u05E1\u05E8 \"".concat(p, "\""),
            children: "\xD7"
          })]
        }, p);
      })
    }), hasCondition && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "tablekit-pin-chips",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        className: "tablekit-pin-chip tablekit-condition-chip",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          className: "tablekit-pin-chip-text",
          children: [((_OPERATORS$find = OPERATORS.find(function (o) {
            return o.key === conditionFilter.operator;
          })) === null || _OPERATORS$find === void 0 ? void 0 : _OPERATORS$find.label) || '', conditionFilter.value ? ": ".concat(conditionFilter.value) : '', conditionFilter.value2 ? " \u2013 ".concat(conditionFilter.value2) : '']
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          className: "tablekit-pin-chip-remove",
          onClick: clearCondition,
          title: "\u05D4\u05E1\u05E8 \u05EA\u05E0\u05D0\u05D9",
          children: "\xD7"
        })]
      })
    }), open && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "tablekit-col-filter-dropdown",
      style: {
        position: 'fixed',
        top: dropdownPos.top,
        right: dropdownPos.right,
        left: 'auto'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "tablekit-filter-tabs",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          className: "tablekit-filter-tab".concat(tab === 'values' ? ' active' : ''),
          onClick: function onClick() {
            return handleTabChange('values');
          },
          children: "\u05E2\u05E8\u05DB\u05D9\u05DD"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          className: "tablekit-filter-tab".concat(tab === 'condition' ? ' active' : ''),
          onClick: function onClick() {
            return handleTabChange('condition');
          },
          children: "\u05EA\u05E0\u05D0\u05D9"
        })]
      }), tab === 'values' && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "tablekit-col-filter-search",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: "text",
            placeholder: "\u05D7\u05E4\u05E9 \u05E2\u05E8\u05DA...",
            value: search,
            onChange: function onChange(e) {
              return setSearch(e.target.value);
            },
            autoFocus: true
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "tablekit-col-filter-actions",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            onClick: selectAll,
            children: "\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            onClick: function onClick() {
              return setIsAllDeselected(true);
            },
            children: "\u05E0\u05E7\u05D4 \u05D1\u05D7\u05D9\u05E8\u05D4"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "tablekit-col-filter-list",
          children: [loadingValues && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "tablekit-col-filter-empty",
            children: "\u05D8\u05D5\u05E2\u05DF..."
          }), !loadingValues && filtered.length === 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "tablekit-col-filter-empty",
            children: "\u05D0\u05D9\u05DF \u05E2\u05E8\u05DB\u05D9\u05DD"
          }), !loadingValues && filtered.map(function (v) {
            var isChecked = !isAllDeselected && (selectedValues.length === 0 || selectedValues.includes(v));
            return /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
              className: "tablekit-col-filter-item",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                type: "checkbox",
                checked: isChecked,
                onChange: function onChange() {
                  if (isAllDeselected) {
                    setIsAllDeselected(false);
                    onValuesChange(col.key, [v]);
                  } else if (selectedValues.length === 0) {
                    var rest = allValues.filter(function (x) {
                      return x !== v;
                    });
                    onValuesChange(col.key, rest);
                  } else {
                    toggleValue(v);
                  }
                }
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                title: v,
                children: v
              })]
            }, v);
          })]
        })]
      }), tab === 'condition' && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "tablekit-condition-panel",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "tablekit-condition-field",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "tablekit-condition-label",
            children: "\u05EA\u05E0\u05D0\u05D9 \u05E1\u05D9\u05E0\u05D5\u05DF"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
            className: "tablekit-condition-select",
            value: condOp,
            onChange: function onChange(e) {
              setCondOp(e.target.value);
              var op = OPERATORS.find(function (o) {
                return o.key === e.target.value;
              });
              if (op && !op.needsValue) {
                setCondVal('');
                setCondVal2('');
              }
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: "",
              children: "\u2014 \u05D1\u05D7\u05E8 \u05EA\u05E0\u05D0\u05D9 \u2014"
            }), OPERATORS.map(function (op) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                value: op.key,
                children: op.label
              }, op.key);
            })]
          })]
        }), (currentOp === null || currentOp === void 0 ? void 0 : currentOp.needsValue) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "tablekit-condition-field",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "tablekit-condition-label",
            children: currentOp.needsValue2 ? 'מ-' : 'ערך'
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            className: "tablekit-condition-input",
            type: currentOp.numeric ? 'number' : 'text',
            value: condVal,
            onChange: function onChange(e) {
              return setCondVal(e.target.value);
            },
            placeholder: "\u05D4\u05D6\u05DF \u05E2\u05E8\u05DA...",
            autoFocus: true
          })]
        }), (currentOp === null || currentOp === void 0 ? void 0 : currentOp.needsValue2) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "tablekit-condition-field",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "tablekit-condition-label",
            children: "\u05E2\u05D3"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            className: "tablekit-condition-input",
            type: "number",
            value: condVal2,
            onChange: function onChange(e) {
              return setCondVal2(e.target.value);
            },
            placeholder: "\u05D4\u05D6\u05DF \u05E2\u05E8\u05DA..."
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "tablekit-condition-actions",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            className: "tablekit-condition-apply",
            onClick: applyCondition,
            disabled: condOp && (currentOp === null || currentOp === void 0 ? void 0 : currentOp.needsValue) && !condVal,
            children: "\u05D4\u05D7\u05DC"
          }), hasCondition && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            className: "tablekit-condition-clear",
            onClick: clearCondition,
            children: "\u05E0\u05E7\u05D4 \u05EA\u05E0\u05D0\u05D9"
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "tablekit-col-filter-footer",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          onClick: clearAll,
          children: "\u05E0\u05E7\u05D4 \u05D4\u05DB\u05DC"
        })
      })]
    })]
  });
};
var _default = exports["default"] = ColumnFilter;
//# sourceMappingURL=ColumnFilter.js.map