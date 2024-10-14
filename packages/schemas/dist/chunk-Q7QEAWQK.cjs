"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTFOEJAS6cjs = require('./chunk-TFOEJAS6.cjs');


var _chunkXYLJS2MLcjs = require('./chunk-XYLJS2ML.cjs');


var _chunkK5TAAY2Pcjs = require('./chunk-K5TAAY2P.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/BibGroupByArgsSchema.ts
var _zod = require('zod');
var BibGroupByArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.BibWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkXYLJS2MLcjs.BibOrderByWithAggregationInputSchema.array(), _chunkXYLJS2MLcjs.BibOrderByWithAggregationInputSchema]).optional(),
  by: _chunkK5TAAY2Pcjs.BibScalarFieldEnumSchema.array(),
  having: _chunkTFOEJAS6cjs.BibScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var BibGroupByArgsSchema_default = BibGroupByArgsSchema;




exports.BibGroupByArgsSchema = BibGroupByArgsSchema; exports.BibGroupByArgsSchema_default = BibGroupByArgsSchema_default;
//# sourceMappingURL=chunk-Q7QEAWQK.cjs.map