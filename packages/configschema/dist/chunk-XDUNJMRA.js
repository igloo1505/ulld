// src/buildStaticData/componentDocumentation.ts
import { z } from "zod";
var componentDocumentationSchema = z.object({
  pluginName: z.string(),
  componentName: z.string(),
  embeddableSyntax: z.string().describe("The syntax for the component as it appears in JSX. Synonymous with the regexToInclude property in the developer config.").array().default([]),
  urls: z.object({
    short: z.string().optional(),
    full: z.string().optional()
  }),
  filePaths: z.object({
    short: z.string().optional(),
    full: z.string().optional()
  }),
  tags: z.string().array().default([]),
  componentId: z.string()
});

export {
  componentDocumentationSchema
};
//# sourceMappingURL=chunk-XDUNJMRA.js.map