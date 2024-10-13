"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIGUYUCA7cjs = require('./chunk-IGUYUCA7.cjs');


var _chunk5S7O3Q5Xcjs = require('./chunk-5S7O3Q5X.cjs');


var _chunkA5IQ72ZBcjs = require('./chunk-A5IQ72ZB.cjs');

// src/database/outputTypeSchemas/FeatureRequestAggregateArgsSchema.ts
var _zod = require('zod');
var FeatureRequestAggregateArgsSchema = _zod.z.object({
  where: _chunkA5IQ72ZBcjs.FeatureRequestWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkIGUYUCA7cjs.FeatureRequestOrderByWithRelationInputSchema.array(), _chunkIGUYUCA7cjs.FeatureRequestOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk5S7O3Q5Xcjs.FeatureRequestWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var FeatureRequestAggregateArgsSchema_default = FeatureRequestAggregateArgsSchema;




exports.FeatureRequestAggregateArgsSchema = FeatureRequestAggregateArgsSchema; exports.FeatureRequestAggregateArgsSchema_default = FeatureRequestAggregateArgsSchema_default;
//# sourceMappingURL=chunk-MVIVQMCP.cjs.map