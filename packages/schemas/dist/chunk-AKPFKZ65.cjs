"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTJHPGSWEcjs = require('./chunk-TJHPGSWE.cjs');


var _chunkVSBRVKJHcjs = require('./chunk-VSBRVKJH.cjs');


var _chunk5OJNJWL4cjs = require('./chunk-5OJNJWL4.cjs');


var _chunkA5IQ72ZBcjs = require('./chunk-A5IQ72ZB.cjs');

// src/database/outputTypeSchemas/FeatureRequestGroupByArgsSchema.ts
var _zod = require('zod');
var FeatureRequestGroupByArgsSchema = _zod.z.object({
  where: _chunkA5IQ72ZBcjs.FeatureRequestWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkTJHPGSWEcjs.FeatureRequestOrderByWithAggregationInputSchema.array(), _chunkTJHPGSWEcjs.FeatureRequestOrderByWithAggregationInputSchema]).optional(),
  by: _chunk5OJNJWL4cjs.FeatureRequestScalarFieldEnumSchema.array(),
  having: _chunkVSBRVKJHcjs.FeatureRequestScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var FeatureRequestGroupByArgsSchema_default = FeatureRequestGroupByArgsSchema;




exports.FeatureRequestGroupByArgsSchema = FeatureRequestGroupByArgsSchema; exports.FeatureRequestGroupByArgsSchema_default = FeatureRequestGroupByArgsSchema_default;
//# sourceMappingURL=chunk-AKPFKZ65.cjs.map