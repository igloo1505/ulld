"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkC73H7DWVcjs = require('./chunk-C73H7DWV.cjs');

// src/database/inputTypeSchemas/SnippetUncheckedCreateInputSchema.ts
var _zod = require('zod');
var SnippetUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  content: _zod.z.string(),
  description: _zod.z.string(),
  keywords: _zod.z.union([_zod.z.lazy(() => _chunkC73H7DWVcjs.SnippetCreatekeywordsInputSchema), _zod.z.string().array()]).optional(),
  language: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional()
}).strict();
var SnippetUncheckedCreateInputSchema_default = SnippetUncheckedCreateInputSchema;




exports.SnippetUncheckedCreateInputSchema = SnippetUncheckedCreateInputSchema; exports.SnippetUncheckedCreateInputSchema_default = SnippetUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-HUPGFVAR.cjs.map