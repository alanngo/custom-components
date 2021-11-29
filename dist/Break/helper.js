"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBreak = void 0;

//stateless logic goes here
const createBreak = num => {
  let ret = [];

  for (let i = 0; i < num; i++) ret.push(i + 1);

  return ret;
};

exports.createBreak = createBreak;