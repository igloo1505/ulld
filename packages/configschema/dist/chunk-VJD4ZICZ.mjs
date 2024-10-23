import {
  zodPathStringField
} from "./chunk-XHBPEY36.mjs";

// src/zod/math/main.ts
import { z } from "zod";
var mathConfigSchemaInner = z.object({
  latexPackages: z.union([z.string().array().describe("Latex packages to be loaded internally. Packages must be supported and available through MathJax."), z.literal("all")]).default("all"),
  latexFontUrl: zodPathStringField("URL of the latex font to be used. This should be left to it's default value unless an additional collection of .woff files are included in the build.additionalPublicResources field.", true),
  constants: z.record(z.string(), z.number()).default({})
});
var mathConfigSchema = mathConfigSchemaInner.default({});
var mathConfigSchemaOutput = z.object({
  latexPackages: z.union([z.string().array(), z.literal("all")]),
  latexFontUrl: zodPathStringField("URL of the latex font to be used. This should be left to it's default value unless an additional collection of .woff files are included in the build.additionalPublicResources field.", true),
  constants: z.record(z.string(), z.number())
});

export {
  mathConfigSchema,
  mathConfigSchemaOutput
};
//# sourceMappingURL=chunk-VJD4ZICZ.mjs.map