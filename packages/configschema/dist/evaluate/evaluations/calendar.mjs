// src/evaluate/evaluations/calendar.ts
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
export {
  calendar_default as default
};
//# sourceMappingURL=calendar.mjs.map