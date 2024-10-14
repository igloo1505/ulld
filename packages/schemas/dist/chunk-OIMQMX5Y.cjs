"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGIF7UQHCcjs = require('./chunk-GIF7UQHC.cjs');


var _chunkNBTRF5PYcjs = require('./chunk-NBTRF5PY.cjs');


var _chunk7T63UVAVcjs = require('./chunk-7T63UVAV.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/CitationsGroupGroupByArgsSchema.ts
var _zod = require('zod');
var CitationsGroupGroupByArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.CitationsGroupWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkGIF7UQHCcjs.CitationsGroupOrderByWithAggregationInputSchema.array(), _chunkGIF7UQHCcjs.CitationsGroupOrderByWithAggregationInputSchema]).optional(),
  by: _chunk7T63UVAVcjs.CitationsGroupScalarFieldEnumSchema.array(),
  having: _chunkNBTRF5PYcjs.CitationsGroupScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var CitationsGroupGroupByArgsSchema_default = CitationsGroupGroupByArgsSchema;




exports.CitationsGroupGroupByArgsSchema = CitationsGroupGroupByArgsSchema; exports.CitationsGroupGroupByArgsSchema_default = CitationsGroupGroupByArgsSchema_default;
//# sourceMappingURL=chunk-OIMQMX5Y.cjs.map