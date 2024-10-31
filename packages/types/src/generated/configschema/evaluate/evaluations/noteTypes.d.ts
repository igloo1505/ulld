import { AppConfigSchemaOutput } from "../../zod/main.js";
import { EvaluationErrors } from "../types.js";
declare const evaluateNoteTypes: (config: AppConfigSchemaOutput, _errors: EvaluationErrors) => EvaluationErrors;
export default evaluateNoteTypes;
