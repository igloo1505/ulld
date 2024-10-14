"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkO6FELH33cjs = require('./chunk-O6FELH33.cjs');


var _chunkYNU4JDYIcjs = require('./chunk-YNU4JDYI.cjs');


var _chunkCZJCZ2QFcjs = require('./chunk-CZJCZ2QF.cjs');


var _chunkHMN4VEUZcjs = require('./chunk-HMN4VEUZ.cjs');


var _chunkEESOLJR6cjs = require('./chunk-EESOLJR6.cjs');

// src/database/outputTypeSchemas/QuoteUpsertArgsSchema.ts
var _zod = require('zod');
var QuoteSelectSchema = _zod.z.object({
  body: _zod.z.boolean().optional(),
  author: _zod.z.boolean().optional(),
  source: _zod.z.boolean().optional(),
  pinned: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var QuoteUpsertArgsSchema = _zod.z.object({
  select: QuoteSelectSchema.optional(),
  where: _chunkEESOLJR6cjs.QuoteWhereUniqueInputSchema,
  create: _zod.z.union([_chunkO6FELH33cjs.QuoteCreateInputSchema, _chunkYNU4JDYIcjs.QuoteUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkHMN4VEUZcjs.QuoteUpdateInputSchema, _chunkCZJCZ2QFcjs.QuoteUncheckedUpdateInputSchema])
}).strict();
var QuoteUpsertArgsSchema_default = QuoteUpsertArgsSchema;





exports.QuoteSelectSchema = QuoteSelectSchema; exports.QuoteUpsertArgsSchema = QuoteUpsertArgsSchema; exports.QuoteUpsertArgsSchema_default = QuoteUpsertArgsSchema_default;
//# sourceMappingURL=chunk-FHYUDVQO.cjs.map