"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEQYKEME4cjs = require('./chunk-EQYKEME4.cjs');

// src/database/outputTypeSchemas/QuoteFindUniqueArgsSchema.ts
var _zod = require('zod');
var QuoteSelectSchema = _zod.z.object({
  body: _zod.z.boolean().optional(),
  author: _zod.z.boolean().optional(),
  source: _zod.z.boolean().optional(),
  pinned: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var QuoteFindUniqueArgsSchema = _zod.z.object({
  select: QuoteSelectSchema.optional(),
  where: _chunkEQYKEME4cjs.QuoteWhereUniqueInputSchema
}).strict();
var QuoteFindUniqueArgsSchema_default = QuoteFindUniqueArgsSchema;





exports.QuoteSelectSchema = QuoteSelectSchema; exports.QuoteFindUniqueArgsSchema = QuoteFindUniqueArgsSchema; exports.QuoteFindUniqueArgsSchema_default = QuoteFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-MCWLRR5S.cjs.map