"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3BULYK7Bcjs = require('./chunk-3BULYK7B.cjs');


var _chunkOZ3ZYXFBcjs = require('./chunk-OZ3ZYXFB.cjs');


var _chunkEQYKEME4cjs = require('./chunk-EQYKEME4.cjs');

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
  data: _zod.z.union([_chunkOZ3ZYXFBcjs.QuoteUpdateInputSchema, _chunk3BULYK7Bcjs.QuoteUncheckedUpdateInputSchema]),
  where: _chunkEQYKEME4cjs.QuoteWhereUniqueInputSchema
}).strict();
var QuoteUpdateArgsSchema_default = QuoteUpdateArgsSchema;





exports.QuoteSelectSchema = QuoteSelectSchema; exports.QuoteUpdateArgsSchema = QuoteUpdateArgsSchema; exports.QuoteUpdateArgsSchema_default = QuoteUpdateArgsSchema_default;
//# sourceMappingURL=chunk-O3PNQDGY.cjs.map