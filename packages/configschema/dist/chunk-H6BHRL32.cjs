"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/buildStaticData/componentDocumentation.ts
var _zod = require('zod');
var componentDocumentationSchema = _zod.z.object({
  pluginName: _zod.z.string(),
  componentName: _zod.z.string(),
  embeddableSyntax: _zod.z.string().describe("The syntax for the component as it appears in JSX. Synonymous with the regexToInclude property in the developer config.").array().default([]),
  urls: _zod.z.object({
    short: _zod.z.string().optional(),
    full: _zod.z.string().optional()
  }),
  filePaths: _zod.z.object({
    short: _zod.z.string().optional(),
    full: _zod.z.string().optional()
  }),
  tags: _zod.z.string().array().default([]),
  componentId: _zod.z.string()
});



exports.componentDocumentationSchema = componentDocumentationSchema;
//# sourceMappingURL=chunk-H6BHRL32.cjs.map