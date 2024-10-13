"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDYQPEKN4cjs = require('./chunk-DYQPEKN4.cjs');


var _chunkW3KL5N76cjs = require('./chunk-W3KL5N76.cjs');


var _chunkI3CP76QZcjs = require('./chunk-I3CP76QZ.cjs');


var _chunkNTUQUDWRcjs = require('./chunk-NTUQUDWR.cjs');

// src/database/outputTypeSchemas/SnippetGroupByArgsSchema.ts
var _zod = require('zod');
var SnippetGroupByArgsSchema = _zod.z.object({
  where: _chunkNTUQUDWRcjs.SnippetWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkW3KL5N76cjs.SnippetOrderByWithAggregationInputSchema.array(), _chunkW3KL5N76cjs.SnippetOrderByWithAggregationInputSchema]).optional(),
  by: _chunkI3CP76QZcjs.SnippetScalarFieldEnumSchema.array(),
  having: _chunkDYQPEKN4cjs.SnippetScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var SnippetGroupByArgsSchema_default = SnippetGroupByArgsSchema;




exports.SnippetGroupByArgsSchema = SnippetGroupByArgsSchema; exports.SnippetGroupByArgsSchema_default = SnippetGroupByArgsSchema_default;
//# sourceMappingURL=chunk-5GWILQAC.cjs.map