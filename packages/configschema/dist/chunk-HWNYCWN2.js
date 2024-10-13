import {
  zodPathStringField
} from "./chunk-6ITAWCMZ.js";

// src/zod/math/main.ts
import { z } from "zod";
var mathConfigSchema = z.object({
  latexPackages: z.union([z.string().array().describe("Latex packages to be loaded internally. Packages must be supported and available through MathJax."), z.literal("all")]).default("all"),
  latexFontUrl: zodPathStringField("URL of the latex font to be used. This should be left to it's default value unless an additional collection of .woff files are included in the build.additionalPublicResources field.", true),
  constants: z.record(z.string(), z.number()).default({})
}).default({});

export {
  mathConfigSchema
};
//# sourceMappingURL=chunk-HWNYCWN2.js.map