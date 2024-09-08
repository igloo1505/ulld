"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/evaluate/evaluations/calendar.ts
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
var calendar_default = evaluateConfig;


exports.default = calendar_default;

module.exports = exports.default;
//# sourceMappingURL=calendar.cjs.map