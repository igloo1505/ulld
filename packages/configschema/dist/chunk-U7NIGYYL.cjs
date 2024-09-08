"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5DEJBS5Ycjs = require('./chunk-5DEJBS5Y.cjs');

// src/zod/math/main.ts
var _zod = require('zod');
var mathConfigSchema = _zod.z.object({
  latexPackages: _zod.z.union([_zod.z.string().array().describe("Latex packages to be loaded internally. Packages must be supported and available through MathJax."), _zod.z.literal("all")]).default("all"),
  latexFontUrl: _chunk5DEJBS5Ycjs.zodPathStringField.call(void 0, "URL of the latex font to be used. This should be left to it's default value unless an additional collection of .woff files are included in the build.additionalPublicResources field.", true),
  constants: _zod.z.record(_zod.z.string(), _zod.z.number()).default({})
}).default({});



exports.mathConfigSchema = mathConfigSchema;
//# sourceMappingURL=chunk-U7NIGYYL.cjs.map