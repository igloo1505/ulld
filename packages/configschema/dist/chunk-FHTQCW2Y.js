import { replaceRecursively } from '@ulld/utilities/utils/general';
import { z } from 'zod';

// src/zod/secondaryConfigParse/getParsableExtensions.ts
var markdownExtensions = z.union([
  z.literal(".mdx"),
  z.literal(".md")
]);
var defaultParsableFileExtensions = z.union([
  z.literal(".mdx"),
  z.literal(".md"),
  z.literal(".ipynb")
]);
var parsableFileExtensions = z.union([
  z.literal(".csv"),
  z.literal(".tsv"),
  z.literal(".excel"),
  z.literal(".numpy"),
  z.literal(".html"),
  z.literal(".pickle"),
  z.literal(".db"),
  z.literal(".sql"),
  z.literal(".pdf"),
  z.literal(".json"),
  z.literal(".tex"),
  z.literal(".hdf5")
]);
var currentParsableExtensions = defaultParsableFileExtensions;
var allParsableFileExtensionSchema = z.union([
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
    ext[k] = replaceRecursively(k, /\./gmi, "");
  }
  return ext;
};

export { allParsableFileExtensionSchema, currentParsableExtensions, defaultParsableFileExtensions, getFileTypeAppendices, getParsableExtensions, markdownExtensions, parsableFileExtensions };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-FHTQCW2Y.js.map