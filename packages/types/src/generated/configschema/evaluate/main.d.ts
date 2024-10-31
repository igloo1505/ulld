import { AppConfigSchemaType } from "../zod/main.js";
import { EvaluationErrors } from "./types.js";
declare const evaluateAppConfig: (appConfig: AppConfigSchemaType) => EvaluationErrors;
export default evaluateAppConfig;
