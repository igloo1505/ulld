"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGVQJANR6cjs = require('./chunk-GVQJANR6.cjs');


var _chunkRMGXYLYOcjs = require('./chunk-RMGXYLYO.cjs');

// src/database/outputTypeSchemas/SnippetCreateArgsSchema.ts
var _zod = require('zod');
var SnippetSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  content: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  keywords: _zod.z.boolean().optional(),
  language: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var SnippetCreateArgsSchema = _zod.z.object({
  select: SnippetSelectSchema.optional(),
  data: _zod.z.union([_chunkGVQJANR6cjs.SnippetCreateInputSchema, _chunkRMGXYLYOcjs.SnippetUncheckedCreateInputSchema])
}).strict();
var SnippetCreateArgsSchema_default = SnippetCreateArgsSchema;





exports.SnippetSelectSchema = SnippetSelectSchema; exports.SnippetCreateArgsSchema = SnippetCreateArgsSchema; exports.SnippetCreateArgsSchema_default = SnippetCreateArgsSchema_default;
//# sourceMappingURL=chunk-4VWET5DZ.cjs.map