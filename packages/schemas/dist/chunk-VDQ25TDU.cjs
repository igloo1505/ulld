"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRVMYAYLHcjs = require('./chunk-RVMYAYLH.cjs');


var _chunkC6GGOV5Jcjs = require('./chunk-C6GGOV5J.cjs');


var _chunk7LT5VVHFcjs = require('./chunk-7LT5VVHF.cjs');

// src/database/outputTypeSchemas/DailyFocusAggregateArgsSchema.ts
var _zod = require('zod');
var DailyFocusAggregateArgsSchema = _zod.z.object({
  where: _chunk7LT5VVHFcjs.DailyFocusWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkRVMYAYLHcjs.DailyFocusOrderByWithRelationInputSchema.array(), _chunkRVMYAYLHcjs.DailyFocusOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkC6GGOV5Jcjs.DailyFocusWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var DailyFocusAggregateArgsSchema_default = DailyFocusAggregateArgsSchema;




exports.DailyFocusAggregateArgsSchema = DailyFocusAggregateArgsSchema; exports.DailyFocusAggregateArgsSchema_default = DailyFocusAggregateArgsSchema_default;
//# sourceMappingURL=chunk-VDQ25TDU.cjs.map