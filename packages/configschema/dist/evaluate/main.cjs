"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQHEMLPYJcjs = require('../chunk-QHEMLPYJ.cjs');
require('../chunk-KQZE75ZZ.cjs');

// src/evaluate/main.ts
var evaluations = [
  _chunkQHEMLPYJcjs.noteTypes_default
];
var evaluateAppConfig = (appConfig) => {
  let errors = [];
  evaluations.forEach((evalFunc) => {
    errors = evalFunc(appConfig, errors);
  });
  return errors;
};
var main_default = evaluateAppConfig;


exports.default = main_default;

module.exports = exports.default;
//# sourceMappingURL=main.cjs.map