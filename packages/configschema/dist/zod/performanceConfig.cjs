'use strict';

var zod = require('zod');

// src/zod/performanceConfig.ts
var performanceConfigSchema = zod.z.object({
  latexParsingDebounceTimeout: zod.z.number().min(0).default(500).describe("The period to wait in milliseconds between parsing latex content that is expected to change rapidly."),
  mdxParsingDebounceTimeout: zod.z.number().min(0).default(500).describe("The period to wait in milliseconds between parsing markdown and mdx content that is expected to change rapidly.")
}).default({});

exports.performanceConfigSchema = performanceConfigSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=performanceConfig.cjs.map