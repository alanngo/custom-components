"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Break = void 0;

var _react = _interopRequireDefault(require("react"));

var _helper = require("./helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Break = _ref => {
  let {
    number = 1
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (0, _helper.createBreak)(number).map(e => /*#__PURE__*/_react.default.createElement("br", {
    key: e
  })));
};

exports.Break = Break;
var _default = Break;
exports.default = _default;