"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAZWT5CPWcjs = require('./chunk-AZWT5CPW.cjs');


var _chunkOEWCDHLVcjs = require('./chunk-OEWCDHLV.cjs');


var _chunkRMHWQG5Ocjs = require('./chunk-RMHWQG5O.cjs');


var _chunkEEBSLQOJcjs = require('./chunk-EEBSLQOJ.cjs');

// src/database/outputTypeSchemas/DailyFocusGroupByArgsSchema.ts
var _zod = require('zod');
var DailyFocusGroupByArgsSchema = _zod.z.object({
  where: _chunkEEBSLQOJcjs.DailyFocusWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkOEWCDHLVcjs.DailyFocusOrderByWithAggregationInputSchema.array(), _chunkOEWCDHLVcjs.DailyFocusOrderByWithAggregationInputSchema]).optional(),
  by: _chunkRMHWQG5Ocjs.DailyFocusScalarFieldEnumSchema.array(),
  having: _chunkAZWT5CPWcjs.DailyFocusScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var DailyFocusGroupByArgsSchema_default = DailyFocusGroupByArgsSchema;




exports.DailyFocusGroupByArgsSchema = DailyFocusGroupByArgsSchema; exports.DailyFocusGroupByArgsSchema_default = DailyFocusGroupByArgsSchema_default;
//# sourceMappingURL=chunk-NBCFE7T4.cjs.map