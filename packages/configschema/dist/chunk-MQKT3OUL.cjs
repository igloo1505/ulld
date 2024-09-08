"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/zod/secondaryConfigParse/getParsableExtensions.ts
var _general = require('@ulld/utilities/utils/general');
var _zod = require('zod');
var markdownExtensions = _zod.z.union([
  _zod.z.literal(".mdx"),
  _zod.z.literal(".md")
]);
var defaultParsableFileExtensions = _zod.z.union([
  _zod.z.literal(".mdx"),
  _zod.z.literal(".md"),
  _zod.z.literal(".ipynb")
]);
var parsableFileExtensions = _zod.z.union([
  _zod.z.literal(".csv"),
  _zod.z.literal(".tsv"),
  _zod.z.literal(".excel"),
  _zod.z.literal(".numpy"),
  _zod.z.literal(".html"),
  _zod.z.literal(".pickle"),
  _zod.z.literal(".db"),
  _zod.z.literal(".sql"),
  _zod.z.literal(".pdf"),
  _zod.z.literal(".json"),
  _zod.z.literal(".tex"),
  _zod.z.literal(".hdf5")
]);
var currentParsableExtensions = defaultParsableFileExtensions;
var allParsableFileExtensionSchema = _zod.z.union([
  defaultParsableFileExtensions,
  parsableFileExtensions
]);
var getParsableExtensions = (config) => {
  let parsable = [
    ".mdx",
    ".ipynb"
  ];
  return parsable;
};
var getFileTypeAppendices = (parsableExtensions) => {
  let ext = {};
  for (const k of parsableExtensions) {
    ext[k] = _general.replaceRecursively.call(void 0, k, /\./gmi, "");
  }
  return ext;
};









exports.markdownExtensions = markdownExtensions; exports.defaultParsableFileExtensions = defaultParsableFileExtensions; exports.parsableFileExtensions = parsableFileExtensions; exports.currentParsableExtensions = currentParsableExtensions; exports.allParsableFileExtensionSchema = allParsableFileExtensionSchema; exports.getParsableExtensions = getParsableExtensions; exports.getFileTypeAppendices = getFileTypeAppendices;
//# sourceMappingURL=chunk-MQKT3OUL.cjs.map