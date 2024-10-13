"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEQYKEME4cjs = require('./chunk-EQYKEME4.cjs');

// src/database/outputTypeSchemas/QuoteFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var QuoteSelectSchema = _zod.z.object({
  body: _zod.z.boolean().optional(),
  author: _zod.z.boolean().optional(),
  source: _zod.z.boolean().optional(),
  pinned: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var QuoteFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: QuoteSelectSchema.optional(),
  where: _chunkEQYKEME4cjs.QuoteWhereUniqueInputSchema
}).strict();
var QuoteFindUniqueOrThrowArgsSchema_default = QuoteFindUniqueOrThrowArgsSchema;





exports.QuoteSelectSchema = QuoteSelectSchema; exports.QuoteFindUniqueOrThrowArgsSchema = QuoteFindUniqueOrThrowArgsSchema; exports.QuoteFindUniqueOrThrowArgsSchema_default = QuoteFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-QV2ULJF7.cjs.map