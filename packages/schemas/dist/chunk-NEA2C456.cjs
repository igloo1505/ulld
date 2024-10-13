"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWRWYOQXXcjs = require('./chunk-WRWYOQXX.cjs');


var _chunkOL34PGCDcjs = require('./chunk-OL34PGCD.cjs');


var _chunkEQYKEME4cjs = require('./chunk-EQYKEME4.cjs');


var _chunkS2SKAEFOcjs = require('./chunk-S2SKAEFO.cjs');

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
  where: _chunkS2SKAEFOcjs.QuoteWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkWRWYOQXXcjs.QuoteOrderByWithRelationInputSchema.array(), _chunkWRWYOQXXcjs.QuoteOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkEQYKEME4cjs.QuoteWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkOL34PGCDcjs.QuoteScalarFieldEnumSchema, _chunkOL34PGCDcjs.QuoteScalarFieldEnumSchema.array()]).optional()
}).strict();
var QuoteFindFirstOrThrowArgsSchema_default = QuoteFindFirstOrThrowArgsSchema;





exports.QuoteSelectSchema = QuoteSelectSchema; exports.QuoteFindFirstOrThrowArgsSchema = QuoteFindFirstOrThrowArgsSchema; exports.QuoteFindFirstOrThrowArgsSchema_default = QuoteFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-NEA2C456.cjs.map