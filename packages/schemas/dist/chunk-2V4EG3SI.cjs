"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZUHXBC56cjs = require('./chunk-ZUHXBC56.cjs');


var _chunkTIYXNCTRcjs = require('./chunk-TIYXNCTR.cjs');


var _chunkNQYHFAMGcjs = require('./chunk-NQYHFAMG.cjs');

// src/database/outputTypeSchemas/DJTAggregateArgsSchema.ts
var _zod = require('zod');
var DJTAggregateArgsSchema = _zod.z.object({
  where: _chunkNQYHFAMGcjs.DJTWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkZUHXBC56cjs.DJTOrderByWithRelationInputSchema.array(), _chunkZUHXBC56cjs.DJTOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkTIYXNCTRcjs.DJTWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var DJTAggregateArgsSchema_default = DJTAggregateArgsSchema;




exports.DJTAggregateArgsSchema = DJTAggregateArgsSchema; exports.DJTAggregateArgsSchema_default = DJTAggregateArgsSchema_default;
//# sourceMappingURL=chunk-2V4EG3SI.cjs.map