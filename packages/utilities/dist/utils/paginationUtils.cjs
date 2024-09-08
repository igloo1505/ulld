'use strict';

// src/utils/paginationUtils.ts
var paginateTemplateString = "<ULLDPAGE>";
var getPaginationTemplateString = (cb) => cb(paginateTemplateString);
var parsePaginationTemplateString = (templateString, pageNumber) => {
  return templateString.replace(encodeURI(paginateTemplateString), `${pageNumber}`).replace(paginateTemplateString, `${pageNumber}`);
};

exports.getPaginationTemplateString = getPaginationTemplateString;
exports.paginateTemplateString = paginateTemplateString;
exports.parsePaginationTemplateString = parsePaginationTemplateString;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=paginationUtils.cjs.map