"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCQ4ZRLDKcjs = require('./chunk-CQ4ZRLDK.cjs');


var _chunk7NRRVSTMcjs = require('./chunk-7NRRVSTM.cjs');


var _chunkEESOLJR6cjs = require('./chunk-EESOLJR6.cjs');


var _chunkVDUZ3NHLcjs = require('./chunk-VDUZ3NHL.cjs');

// src/database/outputTypeSchemas/QuoteFindFirstOrThrowArgsSchema.ts
var _zod = require('zod');
var QuoteSelectSchema = _zod.z.object({
  body: _zod.z.boolean().optional(),
  author: _zod.z.boolean().optional(),
  source: _zod.z.boolean().optional(),
  pinned: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var QuoteFindFirstOrThrowArgsSchema = _zod.z.object({
  select: QuoteSelectSchema.optional(),
  where: _chunkVDUZ3NHLcjs.QuoteWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkCQ4ZRLDKcjs.QuoteOrderByWithRelationInputSchema.array(), _chunkCQ4ZRLDKcjs.QuoteOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkEESOLJR6cjs.QuoteWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunk7NRRVSTMcjs.QuoteScalarFieldEnumSchema, _chunk7NRRVSTMcjs.QuoteScalarFieldEnumSchema.array()]).optional()
}).strict();
var QuoteFindFirstOrThrowArgsSchema_default = QuoteFindFirstOrThrowArgsSchema;





exports.QuoteSelectSchema = QuoteSelectSchema; exports.QuoteFindFirstOrThrowArgsSchema = QuoteFindFirstOrThrowArgsSchema; exports.QuoteFindFirstOrThrowArgsSchema_default = QuoteFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-BLG7MMR2.cjs.map