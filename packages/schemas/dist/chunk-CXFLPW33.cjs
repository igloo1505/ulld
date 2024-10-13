"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4XDWJWQUcjs = require('./chunk-4XDWJWQU.cjs');


var _chunkMJIKECJKcjs = require('./chunk-MJIKECJK.cjs');


var _chunkOL34PGCDcjs = require('./chunk-OL34PGCD.cjs');


var _chunkS2SKAEFOcjs = require('./chunk-S2SKAEFO.cjs');

// src/database/outputTypeSchemas/QuoteGroupByArgsSchema.ts
var _zod = require('zod');
var QuoteGroupByArgsSchema = _zod.z.object({
  where: _chunkS2SKAEFOcjs.QuoteWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkMJIKECJKcjs.QuoteOrderByWithAggregationInputSchema.array(), _chunkMJIKECJKcjs.QuoteOrderByWithAggregationInputSchema]).optional(),
  by: _chunkOL34PGCDcjs.QuoteScalarFieldEnumSchema.array(),
  having: _chunk4XDWJWQUcjs.QuoteScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var QuoteGroupByArgsSchema_default = QuoteGroupByArgsSchema;




exports.QuoteGroupByArgsSchema = QuoteGroupByArgsSchema; exports.QuoteGroupByArgsSchema_default = QuoteGroupByArgsSchema_default;
//# sourceMappingURL=chunk-CXFLPW33.cjs.map