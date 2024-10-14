"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5PVVIOYFcjs = require('./chunk-5PVVIOYF.cjs');

// src/database/outputTypeSchemas/SnippetFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var SnippetSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  content: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  keywords: _zod.z.boolean().optional(),
  language: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var SnippetFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: SnippetSelectSchema.optional(),
  where: _chunk5PVVIOYFcjs.SnippetWhereUniqueInputSchema
}).strict();
var SnippetFindUniqueOrThrowArgsSchema_default = SnippetFindUniqueOrThrowArgsSchema;





exports.SnippetSelectSchema = SnippetSelectSchema; exports.SnippetFindUniqueOrThrowArgsSchema = SnippetFindUniqueOrThrowArgsSchema; exports.SnippetFindUniqueOrThrowArgsSchema_default = SnippetFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-KZW7K6NC.cjs.map