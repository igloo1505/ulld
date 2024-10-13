"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkY7J3UVFBcjs = require('./chunk-Y7J3UVFB.cjs');

// src/database/inputTypeSchemas/SnippetCreateManyInputSchema.ts
var _zod = require('zod');
var SnippetCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  content: _zod.z.string(),
  description: _zod.z.string(),
  keywords: _zod.z.union([_zod.z.lazy(() => _chunkY7J3UVFBcjs.SnippetCreatekeywordsInputSchema), _zod.z.string().array()]).optional(),
  language: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional()
}).strict();
var SnippetCreateManyInputSchema_default = SnippetCreateManyInputSchema;




exports.SnippetCreateManyInputSchema = SnippetCreateManyInputSchema; exports.SnippetCreateManyInputSchema_default = SnippetCreateManyInputSchema_default;
//# sourceMappingURL=chunk-GQKEHJIA.cjs.map