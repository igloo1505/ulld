'use strict';

// src/evaluate/utils.ts
var arrayHasDuplicates = (items, parseItem) => {
  let data = [];
  for (const k of items) {
    let itemData = parseItem ? parseItem(k) : k;
    if (data.includes(itemData)) {
      return true;
    } else {
      data.push(itemData);
    }
  }
  return false;
};

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

module.exports = noteTypes_default;
//# sourceMappingURL=out.js.map

module.exports = exports.default;
//# sourceMappingURL=noteTypes.cjs.map