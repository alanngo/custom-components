"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AwesomeText = void 0;

var _react = _interopRequireDefault(require("react"));

var _helper = require("./helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const AwesomeText = _ref => {
  let {
    as = "p",
    children = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null),
    // color
    textColor = "black",
    // font family
    font = "",
    // font properties
    underline = false,
    overline = false,
    strikethrough = false,
    bold = false,
    italic = false,
    // extra styling
    style = {}
  } = _ref;
  return (0, _helper.getTextType)(as, children, _objectSpread({
    "color": textColor,
    "font-family": font,
    "text-decoration": "".concat(underline ? "underline" : "", " ").concat(overline ? "overline" : "", " ").concat(strikethrough ? "line-through" : ""),
    "font-style": "".concat(italic ? "italic" : ""),
    "font-weight": "".concat(bold ? "bold" : "")
  }, style));
};

exports.AwesomeText = AwesomeText;
var _default = AwesomeText;
exports.default = _default;