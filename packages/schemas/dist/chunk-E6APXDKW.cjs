"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJJVL6ZMBcjs = require('./chunk-JJVL6ZMB.cjs');


var _chunk6O57SVSScjs = require('./chunk-6O57SVSS.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/CitationsGroupAggregateArgsSchema.ts
var _zod = require('zod');
var CitationsGroupAggregateArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.CitationsGroupWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkJJVL6ZMBcjs.CitationsGroupOrderByWithRelationInputSchema.array(), _chunkJJVL6ZMBcjs.CitationsGroupOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk6O57SVSScjs.CitationsGroupWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var CitationsGroupAggregateArgsSchema_default = CitationsGroupAggregateArgsSchema;




exports.CitationsGroupAggregateArgsSchema = CitationsGroupAggregateArgsSchema; exports.CitationsGroupAggregateArgsSchema_default = CitationsGroupAggregateArgsSchema_default;
//# sourceMappingURL=chunk-E6APXDKW.cjs.map