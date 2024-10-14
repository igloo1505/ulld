"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/SnippetUpdatekeywordsInputSchema.ts
var _zod = require('zod');
var SnippetUpdatekeywordsInputSchema = _zod.z.object({
  set: _zod.z.string().array().optional(),
  push: _zod.z.union([_zod.z.string(), _zod.z.string().array()]).optional()
}).strict();
var SnippetUpdatekeywordsInputSchema_default = SnippetUpdatekeywordsInputSchema;




exports.SnippetUpdatekeywordsInputSchema = SnippetUpdatekeywordsInputSchema; exports.SnippetUpdatekeywordsInputSchema_default = SnippetUpdatekeywordsInputSchema_default;
//# sourceMappingURL=chunk-FB5X5LVL.cjs.map