"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEESOLJR6cjs = require('./chunk-EESOLJR6.cjs');

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
  where: _chunkEESOLJR6cjs.QuoteWhereUniqueInputSchema
}).strict();
var QuoteFindUniqueOrThrowArgsSchema_default = QuoteFindUniqueOrThrowArgsSchema;





exports.QuoteSelectSchema = QuoteSelectSchema; exports.QuoteFindUniqueOrThrowArgsSchema = QuoteFindUniqueOrThrowArgsSchema; exports.QuoteFindUniqueOrThrowArgsSchema_default = QuoteFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-HWHD46NN.cjs.map