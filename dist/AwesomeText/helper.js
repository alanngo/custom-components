"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextType = void 0;

//stateless logic goes here
const getTextType = (as, children, style) => {
  switch (as) {
    case "h1":
      return /*#__PURE__*/React.createElement("h1", {
        style: style
      }, children);

    case "h2":
      return /*#__PURE__*/React.createElement("h2", {
        style: style
      }, children);

    case "h3":
      return /*#__PURE__*/React.createElement("h3", {
        style: style
      }, children);

    case "h4":
      return /*#__PURE__*/React.createElement("h4", {
        style: style
      }, children);

    case "h5":
      return /*#__PURE__*/React.createElement("h5", {
        style: style
      }, children);

    case "h6":
      return /*#__PURE__*/React.createElement("h6", {
        style: style
      }, children);

    default:
      return /*#__PURE__*/React.createElement("p", {
        style: style
      }, children);
  }
};

exports.getTextType = getTextType;