'use strict';

var zod = require('zod');
require('glob-to-regexp');
var fsUtils = require('@ulld/utilities/utils/fsUtils');

// src/zod/math/main.ts
zod.z.union([
  zod.z.literal("debug"),
  zod.z.literal("verbose"),
  zod.z.literal("info"),
  zod.z.literal("none")
]);
var zodPathStringField = (desc, optional) => desc ? optional ? zod.z.string().optional().describe(desc).transform((a) => a && fsUtils.withForwardSlash(a)) : zod.z.string().describe(desc).transform((a) => a && fsUtils.withForwardSlash(a)) : optional ? zod.z.string().optional().transform((a) => a && fsUtils.withForwardSlash(a)) : zod.z.string().transform((a) => a && fsUtils.withForwardSlash(a));

// src/zod/math/main.ts
var mathConfigSchema = zod.z.object({
  latexPackages: zod.z.union([zod.z.string().array().describe("Latex packages to be loaded internally. Packages must be supported and available through MathJax."), zod.z.literal("all")]).default("all"),
  latexFontUrl: zodPathStringField("URL of the latex font to be used. This should be left to it's default value unless an additional collection of .woff files are included in the build.additionalPublicResources field.", true),
  constants: zod.z.record(zod.z.string(), zod.z.number()).default({})
}).default({});

exports.mathConfigSchema = mathConfigSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.cjs.map