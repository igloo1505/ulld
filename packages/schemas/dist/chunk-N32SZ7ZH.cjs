"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUVMQA5FCcjs = require('./chunk-UVMQA5FC.cjs');


var _chunkN4OCLFS3cjs = require('./chunk-N4OCLFS3.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/outputTypeSchemas/TimePeriodAggregateArgsSchema.ts
var _zod = require('zod');
var TimePeriodAggregateArgsSchema = _zod.z.object({
  where: _chunk4QJOIHDOcjs.TimePeriodWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkUVMQA5FCcjs.TimePeriodOrderByWithRelationInputSchema.array(), _chunkUVMQA5FCcjs.TimePeriodOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkN4OCLFS3cjs.TimePeriodWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var TimePeriodAggregateArgsSchema_default = TimePeriodAggregateArgsSchema;




exports.TimePeriodAggregateArgsSchema = TimePeriodAggregateArgsSchema; exports.TimePeriodAggregateArgsSchema_default = TimePeriodAggregateArgsSchema_default;
//# sourceMappingURL=chunk-N32SZ7ZH.cjs.map