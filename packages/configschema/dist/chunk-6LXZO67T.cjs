"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/zod/ui/textConfig.ts
var _zod = require('zod');
var fontWeightSchema = _zod.z.union([
  _zod.z.literal("100"),
  _zod.z.literal("200"),
  _zod.z.literal("300"),
  _zod.z.literal("400"),
  _zod.z.literal("500"),
  _zod.z.literal("600"),
  _zod.z.literal("700"),
  _zod.z.literal("800"),
  _zod.z.literal("900")
]);
var fontStyleSchema = _zod.z.union([
  _zod.z.literal("italic"),
  _zod.z.literal("bold"),
  _zod.z.literal("normal")
]);
var fontConfigSchema = _zod.z.object({
  path: _zod.z.string().describe("Should be an absolute path. As this is only required at build time, it is not necessary for this path to be a child of the fsRoot directory."),
  weight: fontWeightSchema,
  style: fontStyleSchema
});
var textConfigSchema = _zod.z.object({
  blockQuoteItalic: _zod.z.boolean().default(false).describe("Whether or not to italicize block quote text."),
  fontPaths: _zod.z.union([
    fontConfigSchema.array(),
    _zod.z.literal("default")
    // change this to accept multiple fonts as a string and automate the layout file write accordingly.
  ]).default("default").describe("An array of font config objects to be bundled during the build.")
}).default({});




exports.fontConfigSchema = fontConfigSchema; exports.textConfigSchema = textConfigSchema;
//# sourceMappingURL=chunk-6LXZO67T.cjs.map