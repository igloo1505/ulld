import { AppConfigSchemaType } from "../zod/main";
import { EvalFunction, EvaluationErrors } from "./types";
import noteTypes from "./evaluations/noteTypes"

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
