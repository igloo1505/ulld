import { ReactNode } from "react";
import { AppConfigSchemaOutput } from "../zod/main";
export type ConfigEvalFixDisplay = "docTypesOverlap";
export interface ConfigEvaluationError {
    label: ReactNode;
    desc: ReactNode;
    severity: "suggest" | "warn" | "error";
    action?: ConfigEvalFixDisplay;
}
export type EvaluationErrors = ConfigEvaluationError[];
export type EvalFunction = (appConfig: AppConfigSchemaOutput, errors: EvaluationErrors) => EvaluationErrors;
//# sourceMappingURL=types.d.ts.map