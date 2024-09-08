'use strict';

var zod = require('zod');
var transformExportString = require('@ulld/utilities/transformExportString');

// src/developer/parserSchema.ts
var parserKeyList = ["mdx"];
var parserExtensionSchema = zod.z.object({
  export: zod.z.string().describe(
    "The export in your package.json that exports the parser function. The parsing function must be the file's default export."
  ).transform(transformExportString.transformExportString),
  conditions: zod.z.object({
    frontMatter: zod.z.string().optional()
  }).default({})
});
var pluginParserMap = zod.z.object({
  mdx: parserExtensionSchema.optional()
});

exports.parserExtensionSchema = parserExtensionSchema;
exports.parserKeyList = parserKeyList;
exports.pluginParserMap = pluginParserMap;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=parserSchema.cjs.map