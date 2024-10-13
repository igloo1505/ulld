"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYRLUHXCQcjs = require('./chunk-YRLUHXCQ.cjs');


var _chunkI3CP76QZcjs = require('./chunk-I3CP76QZ.cjs');


var _chunkF356JBCIcjs = require('./chunk-F356JBCI.cjs');


var _chunkNTUQUDWRcjs = require('./chunk-NTUQUDWR.cjs');

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
  where: _chunkNTUQUDWRcjs.SnippetWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkYRLUHXCQcjs.SnippetOrderByWithRelationInputSchema.array(), _chunkYRLUHXCQcjs.SnippetOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkF356JBCIcjs.SnippetWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkI3CP76QZcjs.SnippetScalarFieldEnumSchema, _chunkI3CP76QZcjs.SnippetScalarFieldEnumSchema.array()]).optional()
}).strict();
var SnippetFindManyArgsSchema_default = SnippetFindManyArgsSchema;





exports.SnippetSelectSchema = SnippetSelectSchema; exports.SnippetFindManyArgsSchema = SnippetFindManyArgsSchema; exports.SnippetFindManyArgsSchema_default = SnippetFindManyArgsSchema_default;
//# sourceMappingURL=chunk-GTP2OFYG.cjs.map