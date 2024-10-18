import {
  arrayHasDuplicates
} from "./chunk-BAH5NRUU.mjs";

// src/evaluate/evaluations/noteTypes.ts
var overlappingDocumentTypes = (noteTypes) => {
  const hasDuplicates = arrayHasDuplicates(noteTypes, (item) => item.docType);
  if (hasDuplicates) {
    return {
      label: "Duplicate DocumentTypes",
      desc: "Each NoteType has a docType key. This key is used internally for navigation and filtering. You may be seeing this error because two or more of the automatically generated keys overlap. Please fix this by adjusting any overlapping keys so they remain unique.",
      severity: "error",
      action: "docTypesOverlap"
    };
  }
};
var evaluations = [
  overlappingDocumentTypes
];
var evaluateNoteTypes = (config, _errors) => {
  let errors = _errors;
  const noteTypes = config.noteTypes;
  for (const k of evaluations) {
    let newError = k(noteTypes);
    if (newError) {
      errors.push(newError);
    }
  }
  return errors;
};
var noteTypes_default = evaluateNoteTypes;

export {
  noteTypes_default
};
//# sourceMappingURL=chunk-4KQUXJR6.mjs.map