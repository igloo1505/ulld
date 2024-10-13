"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVJN7CQ7Ncjs = require('./chunk-VJN7CQ7N.cjs');


var _chunkDCG34RDUcjs = require('./chunk-DCG34RDU.cjs');


var _chunkOBEFW72Ecjs = require('./chunk-OBEFW72E.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/outputTypeSchemas/TimePeriodGroupByArgsSchema.ts
var _zod = require('zod');
var TimePeriodGroupByArgsSchema = _zod.z.object({
  where: _chunk4QJOIHDOcjs.TimePeriodWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkDCG34RDUcjs.TimePeriodOrderByWithAggregationInputSchema.array(), _chunkDCG34RDUcjs.TimePeriodOrderByWithAggregationInputSchema]).optional(),
  by: _chunkOBEFW72Ecjs.TimePeriodScalarFieldEnumSchema.array(),
  having: _chunkVJN7CQ7Ncjs.TimePeriodScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var TimePeriodGroupByArgsSchema_default = TimePeriodGroupByArgsSchema;




exports.TimePeriodGroupByArgsSchema = TimePeriodGroupByArgsSchema; exports.TimePeriodGroupByArgsSchema_default = TimePeriodGroupByArgsSchema_default;
//# sourceMappingURL=chunk-LB3LOC6E.cjs.map