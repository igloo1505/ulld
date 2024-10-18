import {
  noteTypes_default
} from "../chunk-4KQUXJR6.mjs";
import "../chunk-BAH5NRUU.mjs";

// src/evaluate/main.ts
var evaluations = [
  noteTypes_default
];
var evaluateAppConfig = (appConfig) => {
  let errors = [];
  evaluations.forEach((evalFunc) => {
    errors = evalFunc(appConfig, errors);
  });
  return errors;
};
var main_default = evaluateAppConfig;
export {
  main_default as default
};
//# sourceMappingURL=main.mjs.map