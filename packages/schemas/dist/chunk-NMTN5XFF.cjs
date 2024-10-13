"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRVMYAYLHcjs = require('./chunk-RVMYAYLH.cjs');


var _chunkROEDHX2Ocjs = require('./chunk-ROEDHX2O.cjs');


var _chunkC6GGOV5Jcjs = require('./chunk-C6GGOV5J.cjs');


var _chunk7LT5VVHFcjs = require('./chunk-7LT5VVHF.cjs');

// src/database/outputTypeSchemas/DailyFocusFindFirstArgsSchema.ts
var _zod = require('zod');
var DailyFocusSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var DailyFocusFindFirstArgsSchema = _zod.z.object({
  select: DailyFocusSelectSchema.optional(),
  where: _chunk7LT5VVHFcjs.DailyFocusWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkRVMYAYLHcjs.DailyFocusOrderByWithRelationInputSchema.array(), _chunkRVMYAYLHcjs.DailyFocusOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkC6GGOV5Jcjs.DailyFocusWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkROEDHX2Ocjs.DailyFocusScalarFieldEnumSchema, _chunkROEDHX2Ocjs.DailyFocusScalarFieldEnumSchema.array()]).optional()
}).strict();
var DailyFocusFindFirstArgsSchema_default = DailyFocusFindFirstArgsSchema;





exports.DailyFocusSelectSchema = DailyFocusSelectSchema; exports.DailyFocusFindFirstArgsSchema = DailyFocusFindFirstArgsSchema; exports.DailyFocusFindFirstArgsSchema_default = DailyFocusFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-NMTN5XFF.cjs.map