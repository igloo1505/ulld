import { AppConfigSchemaOutput } from "../../zod/main";
import { ConfigEvaluationError, EvaluationErrors } from "../types";

type PartialConfig = any

const someEvaluation = (data: PartialConfig): ConfigEvaluationError | void => {

}


const evaluations: ((data: PartialConfig) => ConfigEvaluationError | void)[] = [

]


const evaluateConfig = (config: AppConfigSchemaOutput, _errors: EvaluationErrors): EvaluationErrors => {
    let errors = _errors
    const data = config.UI as PartialConfig // Adjust this

    for (const k of evaluations){
        let newError = k(data)
        if(newError){
            errors.push(newError)
        }
    }
    return errors
}



export default evaluateConfig
