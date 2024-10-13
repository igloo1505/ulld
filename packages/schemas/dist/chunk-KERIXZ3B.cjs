"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/modelSchema/SnippetSchema.ts
var _zod = require('zod');
var SnippetSchema = _zod.z.object({
  id: _zod.z.number().int(),
  content: _zod.z.string(),
  description: _zod.z.string(),
  keywords: _zod.z.string().array(),
  language: _zod.z.string(),
  createdAt: _zod.z.coerce.date()
});
var SnippetPartialSchema = SnippetSchema.partial();
var SnippetSchema_default = SnippetSchema;





exports.SnippetSchema = SnippetSchema; exports.SnippetPartialSchema = SnippetPartialSchema; exports.SnippetSchema_default = SnippetSchema_default;
//# sourceMappingURL=chunk-KERIXZ3B.cjs.map