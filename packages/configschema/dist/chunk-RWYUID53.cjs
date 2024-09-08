"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/developer/additionalImportsConfigSchema.ts
var _zod = require('zod');
var _transformExportString = require('@ulld/utilities/transformExportString');
var additionalImportsConfigSchema = _zod.z.object({
  root: _zod.z.string().array().default([]).describe(
    "Additional imports to add to the RootLayout. These will not be added to the dom, but may be used to import files that don't need to be executed like css or scss files. Must match export in package.json"
  ).transform(_transformExportString.transformExportStringArray),
  mdx: _zod.z.string().array().default([]).describe(
    "Similar to additionalImports.root, but only applied to pages with rendered mdx content."
  ).transform(_transformExportString.transformExportStringArray)
});



exports.additionalImportsConfigSchema = additionalImportsConfigSchema;
//# sourceMappingURL=chunk-RWYUID53.cjs.map