'use strict';

var zod = require('zod');
var transformExportString = require('@ulld/utilities/transformExportString');

// src/developer/additionalImportsConfigSchema.ts
var additionalImportsConfigSchema = zod.z.object({
  root: zod.z.string().array().default([]).describe(
    "Additional imports to add to the RootLayout. These will not be added to the dom, but may be used to import files that don't need to be executed like css or scss files. Must match export in package.json"
  ).transform(transformExportString.transformExportStringArray),
  mdx: zod.z.string().array().default([]).describe(
    "Similar to additionalImports.root, but only applied to pages with rendered mdx content."
  ).transform(transformExportString.transformExportStringArray)
});

exports.additionalImportsConfigSchema = additionalImportsConfigSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=additionalImportsConfigSchema.cjs.map