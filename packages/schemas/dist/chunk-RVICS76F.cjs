"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkETAKNKU3cjs = require('./chunk-ETAKNKU3.cjs');


var _chunk6WX2KTEOcjs = require('./chunk-6WX2KTEO.cjs');


var _chunkYRBUQDVRcjs = require('./chunk-YRBUQDVR.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/BibEntryGroupByArgsSchema.ts
var _zod = require('zod');
var BibEntryGroupByArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.BibEntryWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkETAKNKU3cjs.BibEntryOrderByWithAggregationInputSchema.array(), _chunkETAKNKU3cjs.BibEntryOrderByWithAggregationInputSchema]).optional(),
  by: _chunkYRBUQDVRcjs.BibEntryScalarFieldEnumSchema.array(),
  having: _chunk6WX2KTEOcjs.BibEntryScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var BibEntryGroupByArgsSchema_default = BibEntryGroupByArgsSchema;




exports.BibEntryGroupByArgsSchema = BibEntryGroupByArgsSchema; exports.BibEntryGroupByArgsSchema_default = BibEntryGroupByArgsSchema_default;
//# sourceMappingURL=chunk-RVICS76F.cjs.map