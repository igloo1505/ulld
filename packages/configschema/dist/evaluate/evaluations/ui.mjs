// src/evaluate/evaluations/ui.ts
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
var ui_default = evaluateConfig;
export {
  ui_default as default
};
//# sourceMappingURL=ui.mjs.map