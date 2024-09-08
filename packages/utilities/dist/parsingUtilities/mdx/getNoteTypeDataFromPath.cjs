'use strict';

// src/parsingUtilities/mdx/getNoteTypeDataFromPath.ts
var sortNoteTypeDataForParsing = (appConfig) => {
  return appConfig.noteTypes.sort((a, b) => b.fs.length - a.fs.length).map((s) => ({
    ...s,
    fs: s.fs.startsWith("/") ? s.fs.slice(1) : s.fs
  }));
};
var getNoteTypeDataFromPath = (rootRelativePath, appConfig, preSortedNoteTypes) => {
  let sorted = preSortedNoteTypes || sortNoteTypeDataForParsing(appConfig);
  let docTypeData = sorted.find((f) => rootRelativePath.includes(f.fs));
  return docTypeData;
};

exports.getNoteTypeDataFromPath = getNoteTypeDataFromPath;
exports.sortNoteTypeDataForParsing = sortNoteTypeDataForParsing;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getNoteTypeDataFromPath.cjs.map