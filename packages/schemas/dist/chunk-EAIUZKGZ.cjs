"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFD4SWBTRcjs = require('./chunk-FD4SWBTR.cjs');


var _chunk5MNQRGWZcjs = require('./chunk-5MNQRGWZ.cjs');


var _chunk7NRRVSTMcjs = require('./chunk-7NRRVSTM.cjs');


var _chunkVDUZ3NHLcjs = require('./chunk-VDUZ3NHL.cjs');

// src/database/outputTypeSchemas/QuoteGroupByArgsSchema.ts
var _zod = require('zod');
var QuoteGroupByArgsSchema = _zod.z.object({
  where: _chunkVDUZ3NHLcjs.QuoteWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk5MNQRGWZcjs.QuoteOrderByWithAggregationInputSchema.array(), _chunk5MNQRGWZcjs.QuoteOrderByWithAggregationInputSchema]).optional(),
  by: _chunk7NRRVSTMcjs.QuoteScalarFieldEnumSchema.array(),
  having: _chunkFD4SWBTRcjs.QuoteScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var QuoteGroupByArgsSchema_default = QuoteGroupByArgsSchema;




exports.QuoteGroupByArgsSchema = QuoteGroupByArgsSchema; exports.QuoteGroupByArgsSchema_default = QuoteGroupByArgsSchema_default;
//# sourceMappingURL=chunk-EAIUZKGZ.cjs.map