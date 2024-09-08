// src/evaluate/evaluations/math.ts
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

export { math_default as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=math.js.map