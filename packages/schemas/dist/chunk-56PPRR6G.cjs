"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkF356JBCIcjs = require('./chunk-F356JBCI.cjs');

// src/database/outputTypeSchemas/SnippetDeleteArgsSchema.ts
var _zod = require('zod');
var SnippetSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  content: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  keywords: _zod.z.boolean().optional(),
  language: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var SnippetDeleteArgsSchema = _zod.z.object({
  select: SnippetSelectSchema.optional(),
  where: _chunkF356JBCIcjs.SnippetWhereUniqueInputSchema
}).strict();
var SnippetDeleteArgsSchema_default = SnippetDeleteArgsSchema;





exports.SnippetSelectSchema = SnippetSelectSchema; exports.SnippetDeleteArgsSchema = SnippetDeleteArgsSchema; exports.SnippetDeleteArgsSchema_default = SnippetDeleteArgsSchema_default;
//# sourceMappingURL=chunk-56PPRR6G.cjs.map