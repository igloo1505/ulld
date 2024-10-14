"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCUJGY6WBcjs = require('./chunk-CUJGY6WB.cjs');

// src/database/outputTypeSchemas/DailyFocusFindUniqueArgsSchema.ts
var _zod = require('zod');
var DailyFocusSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var DailyFocusFindUniqueArgsSchema = _zod.z.object({
  select: DailyFocusSelectSchema.optional(),
  where: _chunkCUJGY6WBcjs.DailyFocusWhereUniqueInputSchema
}).strict();
var DailyFocusFindUniqueArgsSchema_default = DailyFocusFindUniqueArgsSchema;





exports.DailyFocusSelectSchema = DailyFocusSelectSchema; exports.DailyFocusFindUniqueArgsSchema = DailyFocusFindUniqueArgsSchema; exports.DailyFocusFindUniqueArgsSchema_default = DailyFocusFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-5AJ3IWRP.cjs.map