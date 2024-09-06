import { AppConfigSchemaType } from "../zod/main.js";
import { EvalFunction, EvaluationErrors } from "./types.js";
import noteTypes from "./evaluations/noteTypes.js";

const evaluations: EvalFunction[] = [
  noteTypes
];

const evaluateAppConfig = (appConfig: AppConfigSchemaType) => {
    let errors: EvaluationErrors = [];

    evaluations.forEach((evalFunc) => {
        errors = evalFunc(appConfig, errors);
    });
    return errors;
};


export default evaluateAppConfig
