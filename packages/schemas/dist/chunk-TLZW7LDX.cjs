"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUA5QK3HJcjs = require('./chunk-UA5QK3HJ.cjs');


var _chunkDWULA6PMcjs = require('./chunk-DWULA6PM.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/IpynbAggregateArgsSchema.ts
var _zod = require('zod');
var IpynbAggregateArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.IpynbWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkUA5QK3HJcjs.IpynbOrderByWithRelationInputSchema.array(), _chunkUA5QK3HJcjs.IpynbOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkDWULA6PMcjs.IpynbWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var IpynbAggregateArgsSchema_default = IpynbAggregateArgsSchema;




exports.IpynbAggregateArgsSchema = IpynbAggregateArgsSchema; exports.IpynbAggregateArgsSchema_default = IpynbAggregateArgsSchema_default;
//# sourceMappingURL=chunk-TLZW7LDX.cjs.map