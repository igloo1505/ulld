"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkC73H7DWVcjs = require('./chunk-C73H7DWV.cjs');

// src/database/inputTypeSchemas/SnippetCreateInputSchema.ts
var _zod = require('zod');
var SnippetCreateInputSchema = _zod.z.object({
  content: _zod.z.string(),
  description: _zod.z.string(),
  keywords: _zod.z.union([_zod.z.lazy(() => _chunkC73H7DWVcjs.SnippetCreatekeywordsInputSchema), _zod.z.string().array()]).optional(),
  language: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional()
}).strict();
var SnippetCreateInputSchema_default = SnippetCreateInputSchema;




exports.SnippetCreateInputSchema = SnippetCreateInputSchema; exports.SnippetCreateInputSchema_default = SnippetCreateInputSchema_default;
//# sourceMappingURL=chunk-6KUUGPPO.cjs.map