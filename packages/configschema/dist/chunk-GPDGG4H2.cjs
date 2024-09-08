"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/developer/parserSchema.ts
var _zod = require('zod');
var _transformExportString = require('@ulld/utilities/transformExportString');
var parserKeyList = ["mdx"];
var parserExtensionSchema = _zod.z.object({
  export: _zod.z.string().describe(
    "The export in your package.json that exports the parser function. The parsing function must be the file's default export."
  ).transform(_transformExportString.transformExportString),
  conditions: _zod.z.object({
    frontMatter: _zod.z.string().optional()
  }).default({})
});
var pluginParserMap = _zod.z.object({
  mdx: parserExtensionSchema.optional()
});





exports.parserKeyList = parserKeyList; exports.parserExtensionSchema = parserExtensionSchema; exports.pluginParserMap = pluginParserMap;
//# sourceMappingURL=chunk-GPDGG4H2.cjs.map