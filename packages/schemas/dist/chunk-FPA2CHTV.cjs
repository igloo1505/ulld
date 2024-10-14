"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYVAXVUBBcjs = require('./chunk-YVAXVUBB.cjs');


var _chunkGK6I3WZUcjs = require('./chunk-GK6I3WZU.cjs');


var _chunk36EWDBYLcjs = require('./chunk-36EWDBYL.cjs');


var _chunkESEP5I2Scjs = require('./chunk-ESEP5I2S.cjs');

// src/database/outputTypeSchemas/FeatureRequestGroupByArgsSchema.ts
var _zod = require('zod');
var FeatureRequestGroupByArgsSchema = _zod.z.object({
  where: _chunkESEP5I2Scjs.FeatureRequestWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkYVAXVUBBcjs.FeatureRequestOrderByWithAggregationInputSchema.array(), _chunkYVAXVUBBcjs.FeatureRequestOrderByWithAggregationInputSchema]).optional(),
  by: _chunk36EWDBYLcjs.FeatureRequestScalarFieldEnumSchema.array(),
  having: _chunkGK6I3WZUcjs.FeatureRequestScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var FeatureRequestGroupByArgsSchema_default = FeatureRequestGroupByArgsSchema;




exports.FeatureRequestGroupByArgsSchema = FeatureRequestGroupByArgsSchema; exports.FeatureRequestGroupByArgsSchema_default = FeatureRequestGroupByArgsSchema_default;
//# sourceMappingURL=chunk-FPA2CHTV.cjs.map