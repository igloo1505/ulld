'use strict';

var general = require('@ulld/utilities/utils/general');
var zod = require('zod');

// src/zod/secondaryConfigParse/getParsableExtensions.ts
var markdownExtensions = zod.z.union([
  zod.z.literal(".mdx"),
  zod.z.literal(".md")
]);
var defaultParsableFileExtensions = zod.z.union([
  zod.z.literal(".mdx"),
  zod.z.literal(".md"),
  zod.z.literal(".ipynb")
]);
var parsableFileExtensions = zod.z.union([
  zod.z.literal(".csv"),
  zod.z.literal(".tsv"),
  zod.z.literal(".excel"),
  zod.z.literal(".numpy"),
  zod.z.literal(".html"),
  zod.z.literal(".pickle"),
  zod.z.literal(".db"),
  zod.z.literal(".sql"),
  zod.z.literal(".pdf"),
  zod.z.literal(".json"),
  zod.z.literal(".tex"),
  zod.z.literal(".hdf5")
]);
var currentParsableExtensions = defaultParsableFileExtensions;
var allParsableFileExtensionSchema = zod.z.union([
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
    ext[k] = general.replaceRecursively(k, /\./gmi, "");
  }
  return ext;
};

exports.allParsableFileExtensionSchema = allParsableFileExtensionSchema;
exports.currentParsableExtensions = currentParsableExtensions;
exports.defaultParsableFileExtensions = defaultParsableFileExtensions;
exports.getFileTypeAppendices = getFileTypeAppendices;
exports.getParsableExtensions = getParsableExtensions;
exports.markdownExtensions = markdownExtensions;
exports.parsableFileExtensions = parsableFileExtensions;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getParsableExtensions.cjs.map