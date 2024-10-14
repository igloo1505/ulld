"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkESPASEDWcjs = require('./chunk-ESPASEDW.cjs');


var _chunkHX5FCJZJcjs = require('./chunk-HX5FCJZJ.cjs');


var _chunkESEP5I2Scjs = require('./chunk-ESEP5I2S.cjs');

// src/database/outputTypeSchemas/FeatureRequestAggregateArgsSchema.ts
var _zod = require('zod');
var FeatureRequestAggregateArgsSchema = _zod.z.object({
  where: _chunkESEP5I2Scjs.FeatureRequestWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkESPASEDWcjs.FeatureRequestOrderByWithRelationInputSchema.array(), _chunkESPASEDWcjs.FeatureRequestOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkHX5FCJZJcjs.FeatureRequestWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var FeatureRequestAggregateArgsSchema_default = FeatureRequestAggregateArgsSchema;




exports.FeatureRequestAggregateArgsSchema = FeatureRequestAggregateArgsSchema; exports.FeatureRequestAggregateArgsSchema_default = FeatureRequestAggregateArgsSchema_default;
//# sourceMappingURL=chunk-SCRBJMRX.cjs.map