"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGPSTO5WBcjs = require('./chunk-GPSTO5WB.cjs');


var _chunk4V4MANTMcjs = require('./chunk-4V4MANTM.cjs');


var _chunkROEDHX2Ocjs = require('./chunk-ROEDHX2O.cjs');


var _chunk7LT5VVHFcjs = require('./chunk-7LT5VVHF.cjs');

// src/database/outputTypeSchemas/DailyFocusGroupByArgsSchema.ts
var _zod = require('zod');
var DailyFocusGroupByArgsSchema = _zod.z.object({
  where: _chunk7LT5VVHFcjs.DailyFocusWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk4V4MANTMcjs.DailyFocusOrderByWithAggregationInputSchema.array(), _chunk4V4MANTMcjs.DailyFocusOrderByWithAggregationInputSchema]).optional(),
  by: _chunkROEDHX2Ocjs.DailyFocusScalarFieldEnumSchema.array(),
  having: _chunkGPSTO5WBcjs.DailyFocusScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var DailyFocusGroupByArgsSchema_default = DailyFocusGroupByArgsSchema;




exports.DailyFocusGroupByArgsSchema = DailyFocusGroupByArgsSchema; exports.DailyFocusGroupByArgsSchema_default = DailyFocusGroupByArgsSchema_default;
//# sourceMappingURL=chunk-6JFQTQQI.cjs.map