// src/zod/performanceConfig.ts
import { z } from "zod";
var performanceConfigSchema = z.object({
  latexParsingDebounceTimeout: z.number().min(0).default(500).describe("The period to wait in milliseconds between parsing latex content that is expected to change rapidly."),
  mdxParsingDebounceTimeout: z.number().min(0).default(500).describe("The period to wait in milliseconds between parsing markdown and mdx content that is expected to change rapidly.")
}).default({});
var performanceConfigSchemaOutput = z.object({
  latexParsingDebounceTimeout: z.number().min(0),
  mdxParsingDebounceTimeout: z.number().min(0)
});

export {
  performanceConfigSchema,
  performanceConfigSchemaOutput
};
//# sourceMappingURL=chunk-GMU7AEL3.mjs.map