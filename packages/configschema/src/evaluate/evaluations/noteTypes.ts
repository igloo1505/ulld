import { DocumentTypeConfig } from "../../zod/documentConfigSchema";
import { AppConfigSchemaOutput } from "../../zod/main";
import { ConfigEvaluationError, EvaluationErrors } from "../types";
import {arrayHasDuplicates} from "../utils"


const overlappingDocumentTypes = (noteTypes: DocumentTypeConfig[]): ConfigEvaluationError | void  => {
    const hasDuplicates = arrayHasDuplicates<DocumentTypeConfig>(noteTypes, (item) => item.docType as string)
    if(hasDuplicates){
        return {
            label: "Duplicate DocumentTypes",
            desc: "Each NoteType has a docType key. This key is used internally for navigation and filtering. You may be seeing this error because two or more of the automatically generated keys overlap. Please fix this by adjusting any overlapping keys so they remain unique.",
            severity: "error",
            action: "docTypesOverlap"
        }
    }
}


const evaluations = [
    overlappingDocumentTypes
]

const evaluateNoteTypes = (config: AppConfigSchemaOutput, _errors: EvaluationErrors): EvaluationErrors => {
    let errors = _errors
    const noteTypes = config.noteTypes as DocumentTypeConfig[]
    for (const k of evaluations){
         let newError = k(noteTypes)
        if(newError){
            errors.push(newError)
        }
    }
    return errors
}

export default evaluateNoteTypes
