"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPYK7DYT7cjs = require('./chunk-PYK7DYT7.cjs');


var _chunkBO22HPXJcjs = require('./chunk-BO22HPXJ.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/IpynbAggregateArgsSchema.ts
var _zod = require('zod');
var IpynbAggregateArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.IpynbWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkPYK7DYT7cjs.IpynbOrderByWithRelationInputSchema.array(), _chunkPYK7DYT7cjs.IpynbOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkBO22HPXJcjs.IpynbWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var IpynbAggregateArgsSchema_default = IpynbAggregateArgsSchema;




exports.IpynbAggregateArgsSchema = IpynbAggregateArgsSchema; exports.IpynbAggregateArgsSchema_default = IpynbAggregateArgsSchema_default;
//# sourceMappingURL=chunk-RYMAVHAP.cjs.map