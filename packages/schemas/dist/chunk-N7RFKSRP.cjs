"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkI4ZHE2SUcjs = require('./chunk-I4ZHE2SU.cjs');


var _chunkJINXTUMMcjs = require('./chunk-JINXTUMM.cjs');


var _chunkJLR3K3DTcjs = require('./chunk-JLR3K3DT.cjs');

// src/database/outputTypeSchemas/WaitlistRequestAggregateArgsSchema.ts
var _zod = require('zod');
var WaitlistRequestAggregateArgsSchema = _zod.z.object({
  where: _chunkJLR3K3DTcjs.WaitlistRequestWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkI4ZHE2SUcjs.WaitlistRequestOrderByWithRelationInputSchema.array(), _chunkI4ZHE2SUcjs.WaitlistRequestOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkJINXTUMMcjs.WaitlistRequestWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var WaitlistRequestAggregateArgsSchema_default = WaitlistRequestAggregateArgsSchema;




exports.WaitlistRequestAggregateArgsSchema = WaitlistRequestAggregateArgsSchema; exports.WaitlistRequestAggregateArgsSchema_default = WaitlistRequestAggregateArgsSchema_default;
//# sourceMappingURL=chunk-N7RFKSRP.cjs.map