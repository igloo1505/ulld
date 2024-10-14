"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZZYKCO7Ucjs = require('./chunk-ZZYKCO7U.cjs');


var _chunkNC4JAUC2cjs = require('./chunk-NC4JAUC2.cjs');


var _chunk5PVVIOYFcjs = require('./chunk-5PVVIOYF.cjs');


var _chunk54IZ6RTNcjs = require('./chunk-54IZ6RTN.cjs');

// src/database/outputTypeSchemas/SnippetFindManyArgsSchema.ts
var _zod = require('zod');
var SnippetSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  content: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  keywords: _zod.z.boolean().optional(),
  language: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var SnippetFindManyArgsSchema = _zod.z.object({
  select: SnippetSelectSchema.optional(),
  where: _chunk54IZ6RTNcjs.SnippetWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkZZYKCO7Ucjs.SnippetOrderByWithRelationInputSchema.array(), _chunkZZYKCO7Ucjs.SnippetOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk5PVVIOYFcjs.SnippetWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkNC4JAUC2cjs.SnippetScalarFieldEnumSchema, _chunkNC4JAUC2cjs.SnippetScalarFieldEnumSchema.array()]).optional()
}).strict();
var SnippetFindManyArgsSchema_default = SnippetFindManyArgsSchema;





exports.SnippetSelectSchema = SnippetSelectSchema; exports.SnippetFindManyArgsSchema = SnippetFindManyArgsSchema; exports.SnippetFindManyArgsSchema_default = SnippetFindManyArgsSchema_default;
//# sourceMappingURL=chunk-FHFMEWPQ.cjs.map