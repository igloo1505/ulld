'use strict';

var zod = require('zod');

// src/zod/ui/textConfig.ts
var fontWeightSchema = zod.z.union([
  zod.z.literal("100"),
  zod.z.literal("200"),
  zod.z.literal("300"),
  zod.z.literal("400"),
  zod.z.literal("500"),
  zod.z.literal("600"),
  zod.z.literal("700"),
  zod.z.literal("800"),
  zod.z.literal("900")
]);
var fontStyleSchema = zod.z.union([
  zod.z.literal("italic"),
  zod.z.literal("bold"),
  zod.z.literal("normal")
]);
var fontConfigSchema = zod.z.object({
  path: zod.z.string().describe("Should be an absolute path. As this is only required at build time, it is not necessary for this path to be a child of the fsRoot directory."),
  weight: fontWeightSchema,
  style: fontStyleSchema
});
var textConfigSchema = zod.z.object({
  blockQuoteItalic: zod.z.boolean().default(false).describe("Whether or not to italicize block quote text."),
  fontPaths: zod.z.union([
    fontConfigSchema.array(),
    zod.z.literal("default")
    // change this to accept multiple fonts as a string and automate the layout file write accordingly.
  ]).default("default").describe("An array of font config objects to be bundled during the build.")
}).default({});

exports.fontConfigSchema = fontConfigSchema;
exports.textConfigSchema = textConfigSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=textConfig.cjs.map