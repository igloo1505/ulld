import '../chunk-F3FYYIAV.js';

// src/utils/paginationUtils.ts
var paginateTemplateString = "<ULLDPAGE>";
var getPaginationTemplateString = (cb) => cb(paginateTemplateString);
var parsePaginationTemplateString = (templateString, pageNumber) => {
  return templateString.replace(encodeURI(paginateTemplateString), `${pageNumber}`).replace(paginateTemplateString, `${pageNumber}`);
};

export { getPaginationTemplateString, paginateTemplateString, parsePaginationTemplateString };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=paginationUtils.js.map