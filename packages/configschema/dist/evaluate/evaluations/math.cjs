"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/evaluate/evaluations/math.ts
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
var math_default = evaluateConfig;


exports.default = math_default;

module.exports = exports.default;
//# sourceMappingURL=math.cjs.map