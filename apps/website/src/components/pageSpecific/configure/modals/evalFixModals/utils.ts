import { EvaluationErrors, ConfigEvalFixDisplay } from "@ulld/configschema/evaluateConfigTypes";

export const shouldShowModal = (actionKey: ConfigEvalFixDisplay, errors: EvaluationErrors) => {
     return Boolean(errors.length && (errors[0].action === actionKey))
}
