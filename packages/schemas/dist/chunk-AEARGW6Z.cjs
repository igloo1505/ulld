"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkF356JBCIcjs = require('./chunk-F356JBCI.cjs');

// src/database/outputTypeSchemas/SnippetFindUniqueArgsSchema.ts
var _zod = require('zod');
var SnippetSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  content: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  keywords: _zod.z.boolean().optional(),
  language: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var SnippetFindUniqueArgsSchema = _zod.z.object({
  select: SnippetSelectSchema.optional(),
  where: _chunkF356JBCIcjs.SnippetWhereUniqueInputSchema
}).strict();
var SnippetFindUniqueArgsSchema_default = SnippetFindUniqueArgsSchema;





exports.SnippetSelectSchema = SnippetSelectSchema; exports.SnippetFindUniqueArgsSchema = SnippetFindUniqueArgsSchema; exports.SnippetFindUniqueArgsSchema_default = SnippetFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-AEARGW6Z.cjs.map