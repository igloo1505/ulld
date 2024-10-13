"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQUF2NMPAcjs = require('./chunk-QUF2NMPA.cjs');


var _chunkWOQ3TZDJcjs = require('./chunk-WOQ3TZDJ.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/CitationsGroupAggregateArgsSchema.ts
var _zod = require('zod');
var CitationsGroupAggregateArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.CitationsGroupWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkQUF2NMPAcjs.CitationsGroupOrderByWithRelationInputSchema.array(), _chunkQUF2NMPAcjs.CitationsGroupOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkWOQ3TZDJcjs.CitationsGroupWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var CitationsGroupAggregateArgsSchema_default = CitationsGroupAggregateArgsSchema;




exports.CitationsGroupAggregateArgsSchema = CitationsGroupAggregateArgsSchema; exports.CitationsGroupAggregateArgsSchema_default = CitationsGroupAggregateArgsSchema_default;
//# sourceMappingURL=chunk-XJ2AOCDL.cjs.map