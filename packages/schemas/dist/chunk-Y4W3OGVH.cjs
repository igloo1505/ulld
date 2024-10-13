"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIGUYUCA7cjs = require('./chunk-IGUYUCA7.cjs');


var _chunk5OJNJWL4cjs = require('./chunk-5OJNJWL4.cjs');


var _chunk5S7O3Q5Xcjs = require('./chunk-5S7O3Q5X.cjs');


var _chunkA5IQ72ZBcjs = require('./chunk-A5IQ72ZB.cjs');

// src/database/outputTypeSchemas/FeatureRequestFindFirstArgsSchema.ts
var _zod = require('zod');
var FeatureRequestSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  message: _zod.z.boolean().optional(),
  category: _zod.z.boolean().optional(),
  userBase: _zod.z.boolean().optional(),
  receivedOn: _zod.z.boolean().optional()
}).strict();
var FeatureRequestFindFirstArgsSchema = _zod.z.object({
  select: FeatureRequestSelectSchema.optional(),
  where: _chunkA5IQ72ZBcjs.FeatureRequestWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkIGUYUCA7cjs.FeatureRequestOrderByWithRelationInputSchema.array(), _chunkIGUYUCA7cjs.FeatureRequestOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk5S7O3Q5Xcjs.FeatureRequestWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunk5OJNJWL4cjs.FeatureRequestScalarFieldEnumSchema, _chunk5OJNJWL4cjs.FeatureRequestScalarFieldEnumSchema.array()]).optional()
}).strict();
var FeatureRequestFindFirstArgsSchema_default = FeatureRequestFindFirstArgsSchema;





exports.FeatureRequestSelectSchema = FeatureRequestSelectSchema; exports.FeatureRequestFindFirstArgsSchema = FeatureRequestFindFirstArgsSchema; exports.FeatureRequestFindFirstArgsSchema_default = FeatureRequestFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-Y4W3OGVH.cjs.map