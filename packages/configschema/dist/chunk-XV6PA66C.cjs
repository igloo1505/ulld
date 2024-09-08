"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/zod/performanceConfig.ts
var _zod = require('zod');
var performanceConfigSchema = _zod.z.object({
  latexParsingDebounceTimeout: _zod.z.number().min(0).default(500).describe("The period to wait in milliseconds between parsing latex content that is expected to change rapidly."),
  mdxParsingDebounceTimeout: _zod.z.number().min(0).default(500).describe("The period to wait in milliseconds between parsing markdown and mdx content that is expected to change rapidly.")
}).default({});



exports.performanceConfigSchema = performanceConfigSchema;
//# sourceMappingURL=chunk-XV6PA66C.cjs.map