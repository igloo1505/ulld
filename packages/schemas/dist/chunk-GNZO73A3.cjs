"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXA7Q4O2Dcjs = require('./chunk-XA7Q4O2D.cjs');


var _chunkOPMKAR65cjs = require('./chunk-OPMKAR65.cjs');


var _chunkYLCAHLUVcjs = require('./chunk-YLCAHLUV.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/RelatedValuesGroupByArgsSchema.ts
var _zod = require('zod');
var RelatedValuesGroupByArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.RelatedValuesWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkOPMKAR65cjs.RelatedValuesOrderByWithAggregationInputSchema.array(), _chunkOPMKAR65cjs.RelatedValuesOrderByWithAggregationInputSchema]).optional(),
  by: _chunkYLCAHLUVcjs.RelatedValuesScalarFieldEnumSchema.array(),
  having: _chunkXA7Q4O2Dcjs.RelatedValuesScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var RelatedValuesGroupByArgsSchema_default = RelatedValuesGroupByArgsSchema;




exports.RelatedValuesGroupByArgsSchema = RelatedValuesGroupByArgsSchema; exports.RelatedValuesGroupByArgsSchema_default = RelatedValuesGroupByArgsSchema_default;
//# sourceMappingURL=chunk-GNZO73A3.cjs.map