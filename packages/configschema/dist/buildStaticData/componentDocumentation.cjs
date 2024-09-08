'use strict';

var zod = require('zod');

// src/buildStaticData/componentDocumentation.ts
var componentDocumentationSchema = zod.z.object({
  pluginName: zod.z.string(),
  componentName: zod.z.string(),
  embeddableSyntax: zod.z.string().describe("The syntax for the component as it appears in JSX. Synonymous with the regexToInclude property in the developer config.").array().default([]),
  urls: zod.z.object({
    short: zod.z.string().optional(),
    full: zod.z.string().optional()
  }),
  filePaths: zod.z.object({
    short: zod.z.string().optional(),
    full: zod.z.string().optional()
  }),
  tags: zod.z.string().array().default([]),
  componentId: zod.z.string()
});

exports.componentDocumentationSchema = componentDocumentationSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=componentDocumentation.cjs.map