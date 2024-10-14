"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCZJCZ2QFcjs = require('./chunk-CZJCZ2QF.cjs');


var _chunkHMN4VEUZcjs = require('./chunk-HMN4VEUZ.cjs');


var _chunkEESOLJR6cjs = require('./chunk-EESOLJR6.cjs');

// src/database/outputTypeSchemas/QuoteUpdateArgsSchema.ts
var _zod = require('zod');
var QuoteSelectSchema = _zod.z.object({
  body: _zod.z.boolean().optional(),
  author: _zod.z.boolean().optional(),
  source: _zod.z.boolean().optional(),
  pinned: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var QuoteUpdateArgsSchema = _zod.z.object({
  select: QuoteSelectSchema.optional(),
  data: _zod.z.union([_chunkHMN4VEUZcjs.QuoteUpdateInputSchema, _chunkCZJCZ2QFcjs.QuoteUncheckedUpdateInputSchema]),
  where: _chunkEESOLJR6cjs.QuoteWhereUniqueInputSchema
}).strict();
var QuoteUpdateArgsSchema_default = QuoteUpdateArgsSchema;





exports.QuoteSelectSchema = QuoteSelectSchema; exports.QuoteUpdateArgsSchema = QuoteUpdateArgsSchema; exports.QuoteUpdateArgsSchema_default = QuoteUpdateArgsSchema_default;
//# sourceMappingURL=chunk-OVLSRDJF.cjs.map