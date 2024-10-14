"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCQ4ZRLDKcjs = require('./chunk-CQ4ZRLDK.cjs');


var _chunkEESOLJR6cjs = require('./chunk-EESOLJR6.cjs');


var _chunkVDUZ3NHLcjs = require('./chunk-VDUZ3NHL.cjs');

// src/database/outputTypeSchemas/QuoteAggregateArgsSchema.ts
var _zod = require('zod');
var QuoteAggregateArgsSchema = _zod.z.object({
  where: _chunkVDUZ3NHLcjs.QuoteWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkCQ4ZRLDKcjs.QuoteOrderByWithRelationInputSchema.array(), _chunkCQ4ZRLDKcjs.QuoteOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkEESOLJR6cjs.QuoteWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var QuoteAggregateArgsSchema_default = QuoteAggregateArgsSchema;




exports.QuoteAggregateArgsSchema = QuoteAggregateArgsSchema; exports.QuoteAggregateArgsSchema_default = QuoteAggregateArgsSchema_default;
//# sourceMappingURL=chunk-IH4R5NQM.cjs.map