"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5PVVIOYFcjs = require('./chunk-5PVVIOYF.cjs');

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
  where: _chunk5PVVIOYFcjs.SnippetWhereUniqueInputSchema
}).strict();
var SnippetFindUniqueArgsSchema_default = SnippetFindUniqueArgsSchema;





exports.SnippetSelectSchema = SnippetSelectSchema; exports.SnippetFindUniqueArgsSchema = SnippetFindUniqueArgsSchema; exports.SnippetFindUniqueArgsSchema_default = SnippetFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-TPK2LE4H.cjs.map