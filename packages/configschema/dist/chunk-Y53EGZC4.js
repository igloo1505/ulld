// src/developer/parserSchema.ts
import { z } from "zod";
import { transformExportString } from "@ulld/utilities/transformExportString";
var parserKeyList = ["mdx"];
var parserExtensionSchema = z.object({
  export: z.string().describe(
    "The export in your package.json that exports the parser function. The parsing function must be the file's default export."
  ).transform(transformExportString),
  conditions: z.object({
    frontMatter: z.string().optional()
  }).default({})
});
var pluginParserMap = z.object({
  mdx: parserExtensionSchema.optional()
});

export {
  parserKeyList,
  parserExtensionSchema,
  pluginParserMap
};
//# sourceMappingURL=chunk-Y53EGZC4.js.map