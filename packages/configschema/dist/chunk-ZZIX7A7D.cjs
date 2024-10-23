"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJUH5FQQRcjs = require('./chunk-JUH5FQQR.cjs');

// src/zod/math/main.ts
var _zod = require('zod');
var mathConfigSchemaInner = _zod.z.object({
  latexPackages: _zod.z.union([_zod.z.string().array().describe("Latex packages to be loaded internally. Packages must be supported and available through MathJax."), _zod.z.literal("all")]).default("all"),
  latexFontUrl: _chunkJUH5FQQRcjs.zodPathStringField.call(void 0, "URL of the latex font to be used. This should be left to it's default value unless an additional collection of .woff files are included in the build.additionalPublicResources field.", true),
  constants: _zod.z.record(_zod.z.string(), _zod.z.number()).default({})
});
var mathConfigSchema = mathConfigSchemaInner.default({});
var mathConfigSchemaOutput = _zod.z.object({
  latexPackages: _zod.z.union([_zod.z.string().array(), _zod.z.literal("all")]),
  latexFontUrl: _chunkJUH5FQQRcjs.zodPathStringField.call(void 0, "URL of the latex font to be used. This should be left to it's default value unless an additional collection of .woff files are included in the build.additionalPublicResources field.", true),
  constants: _zod.z.record(_zod.z.string(), _zod.z.number())
});




exports.mathConfigSchema = mathConfigSchema; exports.mathConfigSchemaOutput = mathConfigSchemaOutput;
//# sourceMappingURL=chunk-ZZIX7A7D.cjs.map