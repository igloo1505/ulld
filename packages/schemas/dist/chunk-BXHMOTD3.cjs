"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEESOLJR6cjs = require('./chunk-EESOLJR6.cjs');

// src/database/outputTypeSchemas/QuoteDeleteArgsSchema.ts
var _zod = require('zod');
var QuoteSelectSchema = _zod.z.object({
  body: _zod.z.boolean().optional(),
  author: _zod.z.boolean().optional(),
  source: _zod.z.boolean().optional(),
  pinned: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var QuoteDeleteArgsSchema = _zod.z.object({
  select: QuoteSelectSchema.optional(),
  where: _chunkEESOLJR6cjs.QuoteWhereUniqueInputSchema
}).strict();
var QuoteDeleteArgsSchema_default = QuoteDeleteArgsSchema;





exports.QuoteSelectSchema = QuoteSelectSchema; exports.QuoteDeleteArgsSchema = QuoteDeleteArgsSchema; exports.QuoteDeleteArgsSchema_default = QuoteDeleteArgsSchema_default;
//# sourceMappingURL=chunk-BXHMOTD3.cjs.map