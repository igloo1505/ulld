"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/evaluate/evaluations/jupyter.ts
var evaluations = [];
var evaluateConfig = (config, _errors) => {
  let errors = _errors;
  const data = config.UI;
  for (const k of evaluations) {
    let newError = k(data);
    if (newError) {
      errors.push(newError);
    }
  }
  return errors;
};
var jupyter_default = evaluateConfig;


exports.default = jupyter_default;

module.exports = exports.default;
//# sourceMappingURL=jupyter.cjs.map