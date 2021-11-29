"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RenderIf = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RenderIf = _ref => {
  let {
    condition = false,
    children = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null),
    fallback = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "fallback jsx goes here")
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, condition ? children : fallback);
};

exports.RenderIf = RenderIf;
var _default = RenderIf;
exports.default = _default;