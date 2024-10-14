"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2BH3YSQCcjs = require('./chunk-2BH3YSQC.cjs');


var _chunkTQEO4GCGcjs = require('./chunk-TQEO4GCG.cjs');


var _chunkIYNN3UKQcjs = require('./chunk-IYNN3UKQ.cjs');

// src/database/outputTypeSchemas/BusinessContactAggregateArgsSchema.ts
var _zod = require('zod');
var BusinessContactAggregateArgsSchema = _zod.z.object({
  where: _chunkIYNN3UKQcjs.BusinessContactWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk2BH3YSQCcjs.BusinessContactOrderByWithRelationInputSchema.array(), _chunk2BH3YSQCcjs.BusinessContactOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkTQEO4GCGcjs.BusinessContactWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var BusinessContactAggregateArgsSchema_default = BusinessContactAggregateArgsSchema;




exports.BusinessContactAggregateArgsSchema = BusinessContactAggregateArgsSchema; exports.BusinessContactAggregateArgsSchema_default = BusinessContactAggregateArgsSchema_default;
//# sourceMappingURL=chunk-2M5PS2EL.cjs.map