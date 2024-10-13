"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYRLUHXCQcjs = require('./chunk-YRLUHXCQ.cjs');


var _chunkF356JBCIcjs = require('./chunk-F356JBCI.cjs');


var _chunkNTUQUDWRcjs = require('./chunk-NTUQUDWR.cjs');

// src/database/outputTypeSchemas/SnippetAggregateArgsSchema.ts
var _zod = require('zod');
var SnippetAggregateArgsSchema = _zod.z.object({
  where: _chunkNTUQUDWRcjs.SnippetWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkYRLUHXCQcjs.SnippetOrderByWithRelationInputSchema.array(), _chunkYRLUHXCQcjs.SnippetOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkF356JBCIcjs.SnippetWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var SnippetAggregateArgsSchema_default = SnippetAggregateArgsSchema;




exports.SnippetAggregateArgsSchema = SnippetAggregateArgsSchema; exports.SnippetAggregateArgsSchema_default = SnippetAggregateArgsSchema_default;
//# sourceMappingURL=chunk-HZ2GB7RS.cjs.map