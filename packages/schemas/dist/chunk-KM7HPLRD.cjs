"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRKGVME74cjs = require('./chunk-RKGVME74.cjs');


var _chunk67ASKHYDcjs = require('./chunk-67ASKHYD.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/KanBanCardAggregateArgsSchema.ts
var _zod = require('zod');
var KanBanCardAggregateArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.KanBanCardWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkRKGVME74cjs.KanBanCardOrderByWithRelationInputSchema.array(), _chunkRKGVME74cjs.KanBanCardOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk67ASKHYDcjs.KanBanCardWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var KanBanCardAggregateArgsSchema_default = KanBanCardAggregateArgsSchema;




exports.KanBanCardAggregateArgsSchema = KanBanCardAggregateArgsSchema; exports.KanBanCardAggregateArgsSchema_default = KanBanCardAggregateArgsSchema_default;
//# sourceMappingURL=chunk-KM7HPLRD.cjs.map