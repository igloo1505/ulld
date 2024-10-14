"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCUJGY6WBcjs = require('./chunk-CUJGY6WB.cjs');

// src/database/outputTypeSchemas/DailyFocusFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var DailyFocusSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var DailyFocusFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: DailyFocusSelectSchema.optional(),
  where: _chunkCUJGY6WBcjs.DailyFocusWhereUniqueInputSchema
}).strict();
var DailyFocusFindUniqueOrThrowArgsSchema_default = DailyFocusFindUniqueOrThrowArgsSchema;





exports.DailyFocusSelectSchema = DailyFocusSelectSchema; exports.DailyFocusFindUniqueOrThrowArgsSchema = DailyFocusFindUniqueOrThrowArgsSchema; exports.DailyFocusFindUniqueOrThrowArgsSchema_default = DailyFocusFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-HITGCLKY.cjs.map