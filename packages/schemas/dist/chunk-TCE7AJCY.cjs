"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZZYKCO7Ucjs = require('./chunk-ZZYKCO7U.cjs');


var _chunk5PVVIOYFcjs = require('./chunk-5PVVIOYF.cjs');


var _chunk54IZ6RTNcjs = require('./chunk-54IZ6RTN.cjs');

// src/database/outputTypeSchemas/SnippetAggregateArgsSchema.ts
var _zod = require('zod');
var SnippetAggregateArgsSchema = _zod.z.object({
  where: _chunk54IZ6RTNcjs.SnippetWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkZZYKCO7Ucjs.SnippetOrderByWithRelationInputSchema.array(), _chunkZZYKCO7Ucjs.SnippetOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk5PVVIOYFcjs.SnippetWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var SnippetAggregateArgsSchema_default = SnippetAggregateArgsSchema;




exports.SnippetAggregateArgsSchema = SnippetAggregateArgsSchema; exports.SnippetAggregateArgsSchema_default = SnippetAggregateArgsSchema_default;
//# sourceMappingURL=chunk-TCE7AJCY.cjs.map