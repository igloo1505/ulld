"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVODV2FYBcjs = require('./chunk-VODV2FYB.cjs');


var _chunkXBZDSBXJcjs = require('./chunk-XBZDSBXJ.cjs');


var _chunkWXZOF4XYcjs = require('./chunk-WXZOF4XY.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/EquationGroupByArgsSchema.ts
var _zod = require('zod');
var EquationGroupByArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.EquationWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkXBZDSBXJcjs.EquationOrderByWithAggregationInputSchema.array(), _chunkXBZDSBXJcjs.EquationOrderByWithAggregationInputSchema]).optional(),
  by: _chunkWXZOF4XYcjs.EquationScalarFieldEnumSchema.array(),
  having: _chunkVODV2FYBcjs.EquationScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var EquationGroupByArgsSchema_default = EquationGroupByArgsSchema;




exports.EquationGroupByArgsSchema = EquationGroupByArgsSchema; exports.EquationGroupByArgsSchema_default = EquationGroupByArgsSchema_default;
//# sourceMappingURL=chunk-2WQBEZA6.cjs.map