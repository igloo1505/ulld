"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWIS2OEUXcjs = require('../chunk-WIS2OEUX.cjs');
require('../chunk-HSFBBOSQ.cjs');

// src/evaluate/main.ts
var evaluations = [
  _chunkWIS2OEUXcjs.noteTypes_default
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