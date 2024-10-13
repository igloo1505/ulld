"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFBTGV546cjs = require('./chunk-FBTGV546.cjs');


var _chunkQW7PMZNVcjs = require('./chunk-QW7PMZNV.cjs');


var _chunkXRNGTKMLcjs = require('./chunk-XRNGTKML.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/outputTypeSchemas/DietGroupByArgsSchema.ts
var _zod = require('zod');
var DietGroupByArgsSchema = _zod.z.object({
  where: _chunk4QJOIHDOcjs.DietWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkQW7PMZNVcjs.DietOrderByWithAggregationInputSchema.array(), _chunkQW7PMZNVcjs.DietOrderByWithAggregationInputSchema]).optional(),
  by: _chunkXRNGTKMLcjs.DietScalarFieldEnumSchema.array(),
  having: _chunkFBTGV546cjs.DietScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var DietGroupByArgsSchema_default = DietGroupByArgsSchema;




exports.DietGroupByArgsSchema = DietGroupByArgsSchema; exports.DietGroupByArgsSchema_default = DietGroupByArgsSchema_default;
//# sourceMappingURL=chunk-WDBRCV2Q.cjs.map