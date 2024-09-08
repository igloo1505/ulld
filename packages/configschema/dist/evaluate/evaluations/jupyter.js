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
export {
  jupyter_default as default
};
//# sourceMappingURL=jupyter.js.map