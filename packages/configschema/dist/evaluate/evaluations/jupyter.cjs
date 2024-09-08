'use strict';

// src/evaluate/evaluations/jupyter.ts
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

module.exports = jupyter_default;
//# sourceMappingURL=out.js.map

module.exports = exports.default;
//# sourceMappingURL=jupyter.cjs.map